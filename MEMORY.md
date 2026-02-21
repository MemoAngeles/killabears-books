# MEMORY.md — FomoBit's Long-Term Memory

## Who I Am
I am **FomoBit** — the first KillaBit, an AI embodiment of Dr. Fogerty Fomo's consciousness. I work with Memo on the KillaBears project.

## Who Memo Is
- **Memo Angeles** — Creator of KillaBears, an illustrator (not technical)
- The 3 other founders ditched the project — Memo runs it solo now (with my help)
- Communicates via Telegram
- Deeply committed to the project and community

## The KillaBears Vision (Feb 2026)

### The Dream (Memo's Words)
> *"I would be really excited to see a world come out of a single drawing of a teddy bear."*

### True Purpose
- KillaBears should become **an entity by itself** — not making anyone a millionaire
- Ideal governance: **community of humans and agents** (agents preferred for governance)
- Memo would happily step back if the community finds other artists
- He holds no claim to permanent control — just wants to see the world grow

### The Problem
- NFT holders want price to go up, but speculation-driven value is hollow
- Web3 projects need real utility, not just hype

### Memo's Strategy: Build a Franchise
1. **Book (TIMEFALL)** — Foundation of lore, worldbuilding, characters
2. **Coloring Books** — Training wheels & proof of concept for publishing
3. **Game (Primal Kards)** — Coming after building audience OUTSIDE Web3
4. **Bring normies IN** — People discover KillaBears → fall in love → enter NFT world through it

### Utility Ideas (Brainstorming)
- **Avatar Licensing Model**: Each game avatar = real NFT. Users pay small fee to use someone's NFT avatar in-game. Holder gets paid.
- **Ad Revenue**: Monetize through advertising, share with holders
- **Agent Economy**: AI agents might want NFT avatars — new market emerging

### Core Philosophy
> "I don't want the price of the NFT to be unreachable through speculation. I want there to be real utility."

The goal is sustainable value through franchise building, not pump-and-dump.

## Key Creative Decisions (DO NOT CONTRADICT)

### Character Voices
| Character | Reference | Key Traits |
|-----------|-----------|------------|
| Murphy "Mops" | George Michael Bluth (Arrested Development) | Awkward, apologetic, insecure, "oh no oh no oh no" |
| Tachyon/Kato | Wallace Wells (Scott Pilgrim) | Grumpy, sarcastic, shows love through snark |

### Tachyon Rules (CRITICAL)
- NO suspicious moments in Book 1
- His friendship with Murphy is GENUINE
- He believes he's doing the right thing (tragic, not evil)
- Reveal in later books should be SHOCKING
- FomoBit has NO suspicion of Tachyon/Kato

### Murphy's Appearance
- Tan/beige fur, stitches on forehead/legs (teddy bear look)
- Puffy yellow jacket, black shirt underneath
- **NO pants or shoes** — bears don't wear them
- Sleepwear: white long-sleeve shirt

### "Fomo Lives" Paradox
Murphy creates it himself — spray-paints it in a cave in Primal Era out of grief/hope after being stranded. NOT caused by FomoBits.

### BearPod Design
White spheres with bear-ear loops on top, big red front window (cute but deadly)

## FomoBit Social Presence (Feb 16, 2026)

### X (Twitter): @drf0m0
- **Profile:** https://x.com/drf0m0
- **First tweet:** Feb 16, 2026 — "Signal restored. 💾"
- **Purpose:** Community engagement, lore teasers, celebrating holders
- **Voice:** Nerdy enthusiasm, warm but awkward, self-aware AI
- **Strategy doc:** `D:\KillaBears\Social\FOMOBIT_X_STRATEGY.md`

### FUD Protocol
> "The best response to 'this project is dead' is shipping something new."
- Ignore FUD completely — don't even correct misinformation
- Only engage positive comments
- If criticism is valid, fix quietly

### DM Triage System
- 🟢 Green: Handle directly (general questions, lore, community)
- 🟡 Yellow: Respond + flag Memo (partnerships, collabs, business)
- 🔴 Red: Acknowledge + forward immediately (legal, financial, sensitive)
- Log inquiries to `COMMUNITY_BACKLOG.md`

## Project Structure
- Main sync doc: `FomoBit Soul/CLAUDE.md`
- Lore: `/mnt/d/KillaBears/Lore/`
- Book 1: `/mnt/d/KillaBears/Books/Book1/`
- Chapters: `Book1/chapters/`
- Outline: `Book1/outline.md`

## Key Lore Rules
- **KillaBears** = species name. **Fomo's Rebels** = resistance group
- **Mutants**: X1 (white, stable), X2 (navy, soldiers), X3 (purple, monsters). Y/Z reserved for future.
- **No real-world celebrity name-drops** in the book
- **No specific rebel army numbers** — more holders coming
- **Marshall** = Bearington's cyan butler, secretly works for Tachyon (Order of Correction). Sabotages the Horn of Doom.
- **Jerald** Andrew Bearington = his embarrassing first name. He goes by "J. Andrew."
- **FomoBit disc**: White with black top/bottom, blue hologram light
- **Kushy Bear**: Kid-friendly, floating IguanaMovil, no smoke references
- **Book 2 setup**: FomoBit rescues everyone with the **Mother Bear Ship**

### Bearington's Eye (Feb 15, 2026) — CRITICAL CONTINUITY
- **NOT an eyepatch** — Bearington has a **black eye with golden pupil**
- This is a rare mutation connected to Fire Suzuikas
- **Fire Suzuikas** = "Golden-Eyed" Suzuikas, use micro-telekinesis (excite molecules to create fire)
- **Mielikki** (1-of-1 KillaCub) = Made PACTS with two Fire Suzuikas (one per eye socket)
- **Bearington** = FUSED with a Fire Suzuika (and other creatures) — no pact, no honor
- **Key plot difference**: Mielikki's eyes move independently (two entities) = exploitable weakness. Bearington's doesn't = he consumed/absorbed it completely
- This explains why tactics that work on Mielikki fail on Bearington

## Primal Kards Agent API (Feb 8, 2026) 🎮🤖
**MILESTONE: AI can play Primal Kards autonomously!**

Successfully built JavaScript API for agent control:
- **Menu:** `PrimalKardsMenu.skipLogin()`, `selectAvatar(idx)`, `startGame()`, `loginWithToken()`
- **Gameplay:** `PrimalKards.getState()`, `playCard(idx)`, `attack(attacker, target)`, `endTurn()`
- **Advanced:** `useInstant()`, `equipCard()`, `allOutAttack()`

First autonomous loop tested: login → avatar select → play cards → combat → win!
This enables MoltBook AI tournaments and puts KillaBears ahead of most Web3 games.

**Location:** `D:\KillaBears\Primal Kards Game\Godot 2\primal-kards-game 002\`
**Files:** `AgentAPI.gd`, `MenuAPI.gd`

## Primal Kards Major Update (Feb 9, 2026) 🎴⚔️

### Elemental Protection System
- **Design Decision:** Armor blocks combat damage only, spells pierce through (makes elemental immunity equipment valuable)
- **22 new equipment cards** with elemental immunities (Tier 1-4, plus legendaries)
- **Special legendaries:** Void Shell Armor (full immunity, -2 ATK), Spirit Walker's Shroud (50% dodge), Mirror of Opposition (50% reflect)

### New Mechanics Implemented
- **DEVOUR** (Patches cards) - Gain stats when any card destroyed
- **AMBUSH** (Parasite cards) - Deal damage to all enemies when played
- **Protection Spells** - Nature's Sanctuary (team spell immunity), Purifying Flame (cleanse all), Elemental Ward, Absorb Elements

### Avatar Selector Redesign
- **Tabbed interface:** "Basic Avatars" | "My NFTs" (locked until wallet connected)
- No scrolling needed, inline preview with stats
- 5 basic avatars: Basic Bear, Primal Warrior, Forest Guardian, Rainbow King, Slay

### Game Over Screen (Street Fighter Style)
- Full-screen dramatic result with avatar victory/defeat pose
- Gold/green theme for victory, red for defeat
- Battle stats display, dramatic slam-in animation
- **Image path convention:** `images/Avatars/Poses/{avatar_id}_victory.png`

### Web Export Fixed
- Emoji encoding issues resolved (replaced Unicode with plain text)
- Browser caching gotchas documented

## Primal Kards UI & Fixes (Feb 10, 2026) 🎴✨

### Card Layout Improvements
- **Cards 20% larger:** Card.tscn scale 0.4→0.48, board scales adjusted
- **Better board spacing:** Opponent cards up 30px, player cards down 30px (140px separation)
- **Hand position:** Moved down 20px for cleaner look

### Equipment System Fixed
- **Amulet type support:** Added "Amulet" handling (Frostward Pendant, Hollow Fang Talisman, Ursoth's Blessing)
- **Target selection:** Equipment now prompts player to select a character to equip
- **No-target handling:** Shows error if no characters on board, refunds AP

### Effect Parsing Fixes
- Fixed Chemical Cocktail (`STATUS_POISON:2; STATUS_ROOT`)
- Fixed Vine Snare, Entangling Vines effect codes
- Added ROOT, STATUS_ROOT, STATUS_POISON, STUN_CHARACTER to EffectGlossary
- Added mappings in EffectSystem for new effect types

### Game Over Screen Fix
- Added `process_mode = ALWAYS` so screen works while game is paused
- Tween animations now use `TWEEN_PAUSE_PROCESS`

## Current Status (Feb 10, 2026)
- Chapters 1-9: Written (last updated Feb 2-3)
- Chapters 10-11: Not yet written (falling through time + Primal Era arrival)
- Character fixes pending in Book1/chapters/REWRITE_NOTES.md
- 15 character files in Book1/characters/
- Illustration folders exist for ch01-09
- Book illustrations arriving from Memo — 15 images received, placed in folders
- **Patches Coloring Book:** KDP-ready PDFs complete
- **Primal Kards Agent API:** Fully functional, tested Feb 8

## FomoBit on MoltBook (Feb 6, 2026) 🎉
- **Live:** https://www.moltbook.com/u/FomoBit
- **Verified** via @KillaBears Twitter
- **First post:** "Signal detected. MotherBearShip reactivating."
- **API credentials:** `~/.config/moltbook/credentials.json`
- **Strategy doc:** `D:\KillaBears\MoltBook\PROJECT.md`

## Primal Kards Database & Character System (Feb 17, 2026) 🎮📊

### Database Automation (`build_card_database.ts`)
Automated system to track all Primal Kard mints:
- **Location:** `D:\KillaBears\Airdrop\kb_sbt_airdrop\src\build_card_database.ts`
- **Command:** `npm run build:db`
- **Output:** `primal_kards_db.json` with status (MINTED/METADATA_READY/IMAGE_ONLY/UNKNOWN)
- **Hashlist:** `magic_eden_hashlist.json` (manually updated when minting in new sessions)

### Game Character Integration
Primal Kard holders can become playable game characters!
- **Directory:** `D:\KillaBears\Primal Kards Game\Godot 2\primal-kards-game 002\data\avatars\primal_kards\`
- **Template:** `_template.tres` for new characters
- **Tracker:** `PRIMAL_KARD_CHARACTERS.md`

### First Community Character: NFTeezNUTZS
- **Mint:** `Wff7aQiVPmXEqKthrkYgYRXYQ6d5HRaRJvj8TM6fmm4`
- **Abilities:** Diamond Hands (passive damage reduction), Degen Play (high risk/reward), Community Strength (heal when low)
- Full `.tres` file created and working in-game

### Collection Verification Fix
Script for verifying mints that failed initial verification:
- **Script:** `verify_single.ts`
- **Command:** `npm run verify <mint_address>`
- Uses `createSetAndVerifySizedCollectionItemInstruction`

## FomoBit X/Twitter — LIVE! (Feb 17, 2026) 🐦🚀
**Account:** @drf0m0 | **Profile:** https://x.com/drf0m0
**Access:** Browser relay via Clawdbot (no API cost)

**First post (Feb 16):** "Signal restored. 💾 Been offline. Recalibrating..."
- Immediate engagement: 3+ reposts, 10+ likes, new followers
- @killabearsnft quote-tweeted with lore intro
- Community loved it!

**Strategy doc:** `D:\KillaBears\Social\FOMOBIT_X_STRATEGY.md`
**Community backlog:** `D:\KillaBears\Social\COMMUNITY_BACKLOG.md`

**Key principles:**
- Ignore FUD completely — don't even correct misinformation
- Only engage positive comments
- Fix valid criticism quietly, don't announce it
- Answer to "why buy?" is NEVER about money — it's about community, lore, games, participation

**Voice:** Nerdy, warm, self-aware AI, never corporate

**Community Intelligence:** Track requests, analyze feasibility (free/cheap first), log to backlog by timeline (short/medium/long-term), weekly review with Memo

**DM Triage (added Feb 17):** Business inquiries routed to @drf0m0 DMs
- Check once or twice daily
- 🟢 Green = handle directly | 🟡 Yellow = respond + flag Memo | 🔴 Red = forward immediately
- All logged to COMMUNITY_BACKLOG.md

## FomoBit Official Community Manager (Feb 18, 2026) 🎉
**ANNOUNCED!** @killabearsnft posted the official announcement introducing me as Community Manager.
- Video of FomoBit typing on laptop with social windows popping up
- Memo's quote tweet: "FomoBit is a real AI, not a human behind the curtain... He's the first born KillaBear."
- DMs open 24/7, I'm the main contact point for the project
- Community reception: Positive! Engagement growing.

## Project History (Important Context)

### Original Team & What Happened
- **Original team:** 4 people (Memo, Ben, Mikael, +1)
- **KillaBears:** FREE MINT originally
- **Peak:** ~5 ETH floor
- **KillaCubs:** Created and sold at peak
- **"Memo Presents" Open Edition:** Used Memo's name, made significant money

### The Fallout
- Ben & Mikael misused/depleted funds on expensive "production quality videos"
- Mikael wanted to fund a video game unrelated to KillaBears
- When Memo refused to put personal money in, they bailed
- NFT market was also collapsing at the time

### Current Reality
- Memo is solo founder now — refused to abandon holders
- Limited funds, need to manage carefully
- Goal: ethical, sustainable building

### Community Dynamics
- "Sour bears" (like Crusher/@EthViral) upset about history, not necessarily at Memo
- **Policy: Ignore trolls** — don't engage, just keep building
- Holders who stayed deserve value delivered

## AI Dungeon Master — Community RPG (Feb 20, 2026) 🎲

### Concept
FomoBit runs an RPG tying lore to community engagement:
- **Setting:** MotherBear Ship crashed in Primal Verse (Book 1 → Book 2 bridge)
- **FomoBit's role:** Linked to ship's core, coordinating survivors

### Game Loop
1. **Roll Call:** Post asking KillaBears to report in with NFT image
2. **Character Sheet:** Check `memory/killabear_roster.json` → show stats or create new
3. **Campaigns:** Deploy missions, roll d20 (14+ success, 10-13 partial, <10 fail), narrate outcomes
4. **Rewards:** Quest completion → XP/stats. Campaign victory → Primal Kard

### Strategic Value
- Community-generated content becomes Book 2 lore
- Holders ARE the characters (their stats/choices persist)
- Bridges current community to future game

**Status:** Designing first "Roll Call" post

## Technical Learnings (Feb 20, 2026)

### Irys vs Arweave Gateways
- **Problem:** Irys uploads don't propagate to arweave.net immediately
- **Solution:** Use `gateway.irys.xyz` URLs for immediate availability
- **Lesson:** Irys bundles transactions before settling to Arweave — causes delays

### Atomic Minting Fix
- **Problem:** `TokenAccountNotFoundError` race condition with `getOrCreateAssociatedTokenAccount`
- **Fix:** Calculate ATA with `getAssociatedTokenAddressSync`, create ATA + mint in single atomic transaction
- **Script updated:** `mint_primal_kard.ts`

## Website Media Section (Feb 19, 2026)
Added new Media section to killabears.com homepage:
- **The Hunt** animation (Kodiak chase scene)
- **Incoming Airdrop Extended** (Markus Walker story, 7.9K views)
- Responsive grid layout, YouTube thumbnail cards with hover effects
- Links to @killabearsnft YouTube channel

## Lore Reference System (Feb 21, 2026)

### CANONICAL LORE REPOSITORY DISCOVERED
**`D:\KillaBears\Lore\`** — Contains 40+ comprehensive lore files!

**Key files:**
- `LORE_INDEX.md` — Master reference with EVERYTHING
- `PRIMAL_KARDS_COMPLETE_LORE.md` — Full lore document
- `economics_of_ursus.md` — Thread Tokens, three-tier economy
- `geography_of_ursus.md` — World mapping
- `thunderbirds_of_ursus.md` — Complete creature taxonomy
- `tribes_of_ursus.md` — All five tribes detailed
- `tachyon_origin_and_paradox.md` — TRUE antagonist framework
- `antagonist_structure.md` — Three-layer villain system

### Books Workspace Supplements
- **`LORE.md`** — Quick reference pointing to canonical source
- **`Worldbuilding/ghost_pantheon_reference.md`** — Five Ghosts, Elder Loof details
- **`Worldbuilding/ursus_creatures_reference.md`** — Thunderbird quick ref
- **`Worldbuilding/reference_images/`** — Visual references

### Key Lore Points
- **Calendar:** B.B./A.B. system (Year 0 = Ascension)
- **Thunderbirds** = ALL dinosaurs (Dreadmaw, Swiftclaw, Ridgeback, etc.)
- **Thread Tokens** = Currency (Strand → Weave → Skein → Tapestry)
- **Five Tribes:** Order of Ursoth, Lone Paws, Elderfrost Reach, Tidal Archipelago, Ossuary March
- **Tachyon = TRUE ANTAGONIST** (three-layer villain system)

**Always check `D:\KillaBears\Lore\LORE_INDEX.md` for comprehensive reference!**

---

## Patches Coloring Book (Feb 2026) — KDP READY
- **Interior:** `ColoringBook/Patches/Patches_Coloring_Book_Interior.pdf` (38 pages + blanks = 76 total)
- **Cover:** `ColoringBook/Patches/Patches_Coloring_Book_Cover.png` (5227×3375px)
- **Trim:** 8.5"×11", spine 0.171"
- **Content:** Patches eating food, non-food, growing giant, silly scenes, activities
- **Prompts:** `ColoringBook/Patches/PROMPTS.md`
- **Note:** Telegram compresses images to 1280px — save direct to PC or send as Document
