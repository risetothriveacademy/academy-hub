# GitHub Branch Restoration

**Status:** Archived working session  
**Project:** Foundation landing / offer page recovery  
**Tags:** #chat-archive #github #branch #restore #netlify #deploy #foundation

## Objective
Return to a last known stable deployed version and continue work from there instead of debugging broken edits.

## Key Decision
User chose to stop troubleshooting broken edits and return to the last stable deployed version.

## Important References
- Last stable deployed version repeatedly referenced:
  `main@6148a57`
- Another version found during recovery discussion:
  `main@f83fd5c`

## Main Problem
A deploy failed after edits to the landing page / offer page. User wanted to restore the working version and continue from a clean point.

## Working Approach
- Identify last known good commit
- Open a new branch if needed
- Restore file content from stable version
- Commit cleanly
- Redeploy

## User Preference
- Minimal debugging
- Clear, direct GitHub instructions
- Keep momentum
- Use new chats when lag becomes severe

## Next Step
Use the last confirmed working commit as the base and branch from there before making any new visual or Stripe edits.
