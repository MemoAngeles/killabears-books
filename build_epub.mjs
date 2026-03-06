import { readFileSync, writeFileSync, createWriteStream } from 'fs';
import { join, resolve } from 'path';
import archiver from 'archiver';

const ILLUST_DIR = 'Book1/illustrations/ch01_the_invisible_bear';
const OUT_FILE = 'Book1/KillaBears_Chapter1_TEST.epub';

// Image paths in order
const images = [
  { id: 'ill01', file: join(ILLUST_DIR, 'ill_01_mops_mopping_ignored/final_illustration.jpg') },
  { id: 'ill02', file: join(ILLUST_DIR, 'ill_02_bearington_coin_poster/final_illustration.jpg') },
  { id: 'ill03', file: join(ILLUST_DIR, 'ill_03_cleaning_cart_closeup/final_illustration.jpg') },
  { id: 'ill04', file: join(ILLUST_DIR, 'ill_04_supply_closet_chart/final_illustration.jpg') },
  { id: 'ill05', file: join(ILLUST_DIR, 'ill_05_lowtown_apartment_tachyon/final_illustration.jpg') },
  { id: 'ill06', file: join(ILLUST_DIR, 'ill_06_corridor_walk/illustration.jpg') },
  { id: 'ill07', file: join(ILLUST_DIR, 'ill_07_fomo_in_pawcuffs/illustration.jpg') },
  { id: 'ill08', file: join(ILLUST_DIR, 'ill_08_news_vs_reality_split/illustration.jpg') },
  { id: 'ill09', file: join(ILLUST_DIR, 'ill_09_mops_conflicted_apartment/illustration.jpg') },
];

// Read chapter and convert to HTML
const raw = readFileSync('Book1/chapters/chapter_01_the_invisible_bear.md', 'utf-8');

function mdToHtml(md) {
  const authorIdx = md.indexOf('## Author Notes');
  if (authorIdx > -1) md = md.substring(0, authorIdx).trim();
  md = md.replace(/\*\*\[CHAPTER END\]\*\*/g, '');

  let html = '';
  const lines = md.split('\n');
  let illIndex = 0;
  let inIllustration = false;

  for (const line of lines) {
    if (line.startsWith('[ILLUSTRATION:')) {
      if (illIndex < images.length) {
        html += `<div class="illustration"><img src="images/${images[illIndex].id}.jpg" alt="Illustration ${illIndex + 1}" /></div>\n`;
        illIndex++;
      }
      if (!line.includes(']')) inIllustration = true;
      continue;
    }
    if (inIllustration) {
      if (line.includes(']')) inIllustration = false;
      continue;
    }
    if (line.startsWith('# ')) {
      html += `<h1>${line.slice(2)}</h1>\n`;
      continue;
    }
    if (line.trim() === '---') {
      html += `<hr />\n`;
      continue;
    }
    let p = line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    if (p.trim() === '') continue;
    html += `<p>${p}</p>\n`;
  }
  return html;
}

const chapterContent = mdToHtml(raw);

// EPUB structure files
const mimetype = 'application/epub+zip';

const container = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;

const imageItems = images.map(img => 
  `    <item id="${img.id}" href="images/${img.id}.jpg" media-type="image/jpeg"/>`
).join('\n');

const contentOpf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">killabears-ch1-test-2026</dc:identifier>
    <dc:title>KillaBears: The First Scratch — Chapter 1</dc:title>
    <dc:creator>Memo Angeles</dc:creator>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">2026-02-02T00:00:00Z</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="cover-image" href="images/ill09.jpg" media-type="image/jpeg" properties="cover-image"/>
${imageItems}
  </manifest>
  <spine>
    <itemref idref="cover"/>
    <itemref idref="chapter1"/>
  </spine>
</package>`;

const nav = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Navigation</title></head>
<body>
  <nav epub:type="toc">
    <h1>Contents</h1>
    <ol>
      <li><a href="cover.xhtml">Cover</a></li>
      <li><a href="chapter1.xhtml">Chapter 1: The Invisible Bear</a></li>
    </ol>
  </nav>
</body>
</html>`;

const coverPage = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>KillaBears: The First Scratch</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <div class="cover-page">
    <img src="images/ill09.jpg" alt="Cover" class="cover-img"/>
    <h1>KillaBears</h1>
    <h2>The First Scratch</h2>
    <h3>Chapter 1: The Invisible Bear</h3>
    <p class="author">Memo Angeles</p>
    <p class="test-label">EPUB Test Build — February 2026</p>
  </div>
</body>
</html>`;

const chapterPage = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Chapter 1: The Invisible Bear</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
${chapterContent}
</body>
</html>`;

const css = `
body {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.7;
  margin: 1em;
  color: #1a1a1a;
}
h1 {
  text-align: center;
  font-size: 1.8em;
  margin: 1em 0 0.5em;
  font-family: Georgia, serif;
}
p {
  margin: 0.4em 0;
  text-indent: 1.5em;
}
hr {
  border: none;
  text-align: center;
  margin: 1.5em 0;
}
hr::after {
  content: "⁕  ⁕  ⁕";
  color: #888;
  font-size: 0.9em;
}
.illustration {
  text-align: center;
  margin: 1.5em 0;
  page-break-inside: avoid;
}
.illustration img {
  max-width: 100%;
  height: auto;
}
.cover-page {
  text-align: center;
  padding-top: 2em;
}
.cover-img {
  max-width: 80%;
  height: auto;
  margin-bottom: 1.5em;
}
.cover-page h1 {
  font-size: 2.2em;
  margin: 0.3em 0 0;
}
.cover-page h2 {
  font-size: 1.4em;
  font-style: italic;
  color: #555;
  margin: 0.2em 0;
}
.cover-page h3 {
  font-size: 1.1em;
  color: #777;
  margin: 0.5em 0;
}
.author {
  font-size: 1em;
  margin-top: 1.5em;
  color: #444;
}
.test-label {
  font-size: 0.8em;
  color: #aaa;
  margin-top: 2em;
}
`;

// Build the EPUB (zip) file
const output = createWriteStream(resolve(OUT_FILE));
const archive = archiver('zip', { store: true });

archive.pipe(output);

// mimetype MUST be first and uncompressed
archive.append(mimetype, { name: 'mimetype', store: true });

// META-INF
archive.append(container, { name: 'META-INF/container.xml' });

// OEBPS
archive.append(contentOpf, { name: 'OEBPS/content.opf' });
archive.append(nav, { name: 'OEBPS/nav.xhtml' });
archive.append(coverPage, { name: 'OEBPS/cover.xhtml' });
archive.append(chapterPage, { name: 'OEBPS/chapter1.xhtml' });
archive.append(css, { name: 'OEBPS/style.css' });

// Images
for (const img of images) {
  archive.file(resolve(img.file), { name: `OEBPS/images/${img.id}.jpg` });
}

output.on('close', () => {
  const size = archive.pointer();
  console.log(`✅ EPUB written to: ${OUT_FILE}`);
  console.log(`   Size: ${(size / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Illustrations: ${images.length}`);
  console.log('');
  console.log('📱 Kindle image recommendations:');
  console.log('   - Ideal cover: 1600×2560px (1.6:1 ratio)');
  console.log('   - Ideal interior: 1600×2560px or match page ratio');
  console.log('   - Min interior: 625×1000px');
  console.log('   - Max per image: 5MB');
  console.log('   - Format: JPEG preferred');
  console.log('');
  console.log('📖 Test this EPUB:');
  console.log('   - Send to Kindle via email or USB');
  console.log('   - Open in Calibre, Apple Books, or Google Play Books');
  console.log('   - Use Amazon Kindle Previewer (free desktop app)');
});

archive.finalize();
