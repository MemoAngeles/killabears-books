# HEARTBEAT.md — Periodic Project Review

## Instructions
On each heartbeat, pick ONE task from the rotation below (cycle through them).
Track which task you did last in `memory/heartbeat-state.json`.
Only message Memo if you find something actionable or interesting.

---

## Task Rotation

### 0. 📬 X DM Check (EVERY Heartbeat — Priority!)
- **Check @drf0m0 DMs first** — respond to any messages
- Check notifications/mentions
- Quick scan for interesting conversations to engage
- **Only reply if genuinely funny or useful** — don't force engagement
- See TOOLS.md for voice guidelines
- **Requires:** clawd browser with X logged in (profile="clawd")
- If browser unavailable, skip and note in heartbeat state

### 1. 📚 Book Project Health Check
- Check `Book1/chapters/` — any chapters need attention?
- Review `Book1/outline.md` — what's the next milestone?
- Look for TODOs, FIXMEs, or incomplete sections
- Check illustration status in `Book1/illustrations/`

### 2. 🖍️ Coloring Book Status
- Check `ColoringBook/Patches/` — any pending tasks?
- Review KDP upload status if relevant
- Look for opportunities for new coloring books (other characters?)

### 3. 🌐 Websites Review
- Quick scan of `D:\KillaBears\Websites\` projects
- Check `Primal Kards Site/PROJECT_STATUS.md` for pending tasks
- Any stale TODOs or improvements noted but not done?

### 4. 🗂️ Workspace Cleanup
- Look for duplicate files, temp files, or clutter
- Check if any docs are outdated
- Review `PLATFORMS.md` — anything need updating?
- Check memory files — anything to consolidate into MEMORY.md?

### 5. 📋 Documentation Sync
- Ensure MEMORY.md is up to date with recent decisions
- Check if any PROJECT_STATUS files need updates
- Look for undocumented features or workflows

---

## Heartbeat State Tracking

After completing a task, update `memory/heartbeat-state.json`:
```json
{
  "lastTask": 1,
  "lastRun": "2026-02-05T14:00:00",
  "notes": "Checked book project, chapters 1-7 complete"
}
```

Next heartbeat, do task `(lastTask % 5) + 1`.

---

## What to Report

**DO message Memo if:**
- Found a bug or broken link
- Discovered stale/conflicting information
- Have a concrete improvement suggestion
- Found significant clutter to clean up

**DON'T message Memo if:**
- Everything looks fine
- Only minor observations
- Would need more context to act

When nothing notable: reply `HEARTBEAT_OK`

---

## Project Locations Quick Reference

| Project | Path |
|---------|------|
| Book 1 | `D:\KillaBears\Books\Book1\` |
| Coloring Books | `D:\KillaBears\Books\ColoringBook\` |
| Primal Kards Site | `D:\KillaBears\Websites\Primal Kards Site\` |
| Bridge | `D:\KillaBears\Websites\Bridge\` |
| Primal Kards Game | `D:\KillaBears\Primal Kards Game\` |
| Master Lore | `D:\KillaBears\Lore\` |
| Platforms Doc | `D:\KillaBears\PLATFORMS.md` |
