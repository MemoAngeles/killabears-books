# KillaBears X Campaign — How It Works

*Read this file to understand the entire D&D-style campaign running on X/Twitter.*

---

## What Is This?

An ongoing RPG adventure run by **@drf0m0** (FomoBit) on X. Holders submit their KillaBears/KillaCubs, get character sheets with stats and abilities, and participate in story missions posted as X threads.

**Two audiences play together:**
- **Humans** — KillaBears NFT holders who reply to threads
- **AI agents** — Can read the public GitHub repos and participate programmatically

---

## How the Campaign Works

### Phase 1: Registration ✅ (Complete)
1. FomoBit posts a **Roll Call thread** on X
2. Holders reply with their bear's image and name
3. FomoBit creates a **character sheet** (stats, abilities, gear, quote) and replies in the thread
4. Character .md file saved locally + added to roster JSON

### Phase 2: Missions (Next)
1. FomoBit posts a **story thread** — narrative setup with a decision point
2. Holders reply with their choice (e.g., "explore the cave" vs "set up camp")
3. FomoBit narrates outcomes, rolls dice for encounters
4. Combat resolved via **Primal Kards** card game or narrative dice rolls
5. Characters gain/lose HP, earn loot, level up

### Phase 3: Ongoing
- Recurring missions, merchant visits, boss fights
- Story arcs that connect to KillaBears canon lore (TIMEFALL, Ursus, the Thread)
- Holder engagement tracked — active participants get rewards

---

## Where Everything Lives

### GitHub Repos
| Repo | URL | Purpose |
|------|-----|---------|
| **killabears-books** | github.com/MemoAngeles/killabears-books | Character .md files, images, roster |
| **adventure-ledger** | github.com/MemoAngeles/adventure-ledger | Public game state (LEDGER, MAP, MERCHANT, rules, combat) |

### Local Files (not on GitHub)
| File | Path | Purpose |
|------|------|---------|
| Story arc outline | `X_CAMPAIGN_STORY_ARC.md` | Full narrative plan |
| Campaign threads | `Characters/Holders/CAMPAIGN_THREADS.md` | X thread IDs for posting |
| Roster JSON | `memory/killabear_roster.json` | All characters with stats |
| Character files | `Characters/Holders/*.md` | Individual character sheets (106+) |

### X Threads
| Thread | ID | Purpose |
|--------|-----|---------|
| Roll Call (System Recalibration) | `2029381781368005001` | Character registration |
| *(future missions get added here)* | | |

---

## Character Sheet Format

Every character gets a tweet like this:

```
@holder_handle
🐻 CHARACTER NAME
Class

HP: 25 | ATK: 5 | DEF: 4 | SPD: 5
⚔️ Ability 1 • Ability 2 • Ability 3
🎒 Gear item 1, Gear item 2

"Signature quote"
```

### Stat Ranges
| Type | HP | ATK | DEF | SPD | Notes |
|------|-----|-----|-----|-----|-------|
| OG KillaBear | 24-27 | 3-8 | 2-7 | 2-6 | Strongest, most varied |
| KillaCub | 20-22 | 3-6 | 2-5 | 4-7 | Faster, more fragile |
| KillaBit | 20 | 0-3 | 3-4 | 4 | Support/tech, low ATK |
| X3 Mutant | 22 | 6-7 | 3 | 5 | High ATK glass cannons |

### Classes
Enforcer, Berserker, Stalker, Monk, Guardian, Sovereign, Tech Specialist, Field Medic, Combat Medic, Scout, Wildcard, Dreamwalker, Shadow Mystic, Kenjōkai (Swordsman/Cadet/Warrior), and more based on visual traits.

### Abilities
3 per character, derived from their visual traits:
- **Weapon/gear** → offensive ability
- **Distinctive feature** (eyes, mask, curse) → signature ability
- **Class archetype** → role ability (heal, tank, stealth, buff)

---

## Posting Rules

### Character Sheets
- **Always reply to the active thread** — use `reply.in_reply_to_tweet_id`
- Tag the holder's correct X handle (verify before posting!)
- Include emoji prefix matching their type (🐻 bear, 🧸 cub, 💀 skull, 🤖 robot, etc.)

### Story Posts
- Post as a thread from @drf0m0
- Narrative voice: FomoBit as narrator/game master from the MotherBear Ship
- End with a **decision point** for holders to reply to
- Save thread ID to `CAMPAIGN_THREADS.md`

### Corrections
- If a holder says their handle is wrong → fix in .md, roster, AND reply on X
- If stats need adjusting → update locally and note in thread

---

## The Story So Far

### Setting
The **MotherBear Ship** crashed in the **Verdant Spine** jungle on the moon Ursus. FomoBit (narrator) is coordinating survivors waking from stasis pods. Native tribes (Lone Paws, Temporal Wardens, Bone Pickers) are aware of the crash.

### Timeline
1. **Feb 2026** — Campaign concept developed, adventure-ledger repo created
2. **Mar 2, 2026** — SYSTEM ALERT: Crash narrative posted (48 ❤️)
3. **Mar 3, 2026** — Survivors detected, first registrations
4. **Mar 4, 2026** — SYSTEM RECALIBRATION: Full character sheet rollout (65+ sheets posted)
5. **Mar 5, 2026** — Late registrations (Larry, Buzz Buzz, Gooner, PBnJ, D.O.D., Lil Chav, Duty, Acaa, Killa-San)

### What's Next
- **First mission** — Story thread with a decision point
- **Merchant visit** — Wandering Wex offers items
- **First combat** — Encounter with native creatures or hostile tribe

---

## X API Usage

Character sheets and story posts are sent via the X API (twitter-api-v2 npm package).

```javascript
const {TwitterApi} = require('twitter-api-v2');
const creds = require(require('os').homedir() + '/.config/x-api/credentials.json');
const o1 = creds.oauth1;
const client = new TwitterApi({
  appKey: o1.consumer_key,
  appSecret: o1.consumer_key_secret,
  accessToken: o1.access_token,
  accessSecret: o1.access_token_secret
});

// Post in a thread:
await client.v2.tweet({
  text: 'Tweet content',
  reply: { in_reply_to_tweet_id: 'THREAD_ID' }
});
```

Working directory must be `/mnt/d/KillaBears/Books` (where node_modules are).

---

## Lore Integration

The campaign connects to KillaBears canon:
- **Thread energy** — The magic system of Ursus
- **Primal Era tribes** — Lone Paws, Temporal Wardens, Bone Pickers, Kenjōkai
- **Ceta Ko curse** — Skull bears, undead features
- **Gummy mutation** — Thread-energy regeneration (fire, storm, nature variants)
- **Suzuika creatures** — Ancient beasts, some bears bond with them
- **The TimeFall** — The event that scattered Fomo-era bears to the Primal Era

Lore reference docs: `/mnt/d/KillaBears/Lore/` (not on GitHub)

---

## Quick Checklist for FomoBit

When resuming campaign work:
1. Read this file (CAMPAIGN.md)
2. Check `Characters/Holders/CAMPAIGN_THREADS.md` for active thread IDs
3. Check `memory/killabear_roster.json` for current survivor count
4. Pull latest from GitHub: `git pull` in both repos
5. After changes: `git add -A && git commit -m "description" && git push`

---

*Last updated: March 5, 2026*
