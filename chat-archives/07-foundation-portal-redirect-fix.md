# Foundation portal redirect fix

**Status:** Archived  
**Project:** Foundation Course content portal  
**Tags:** #chat-archive #portal #redirect #netlify #login #foundation-course

## Objective
Fix the portal access flow so paid users reach the actual course lesson area rather than broken or incorrect URLs.

## Main Issue
Users could create account / log in, see expected access screens, but then hit:
- wrong destination
- 404 page
- static login behavior
- incorrect Netlify URL path

## Key Symptoms
- Button pointed to wrong destination
- Portal login screen appeared but did not move correctly into lesson content
- Some URLs resolved to Netlify 404 pages

## Important Notes
- User was very concerned about not recreating prior work
- There was visible progress when the course contents portal became visible
- Remaining issue centered on routing and destination correctness

## Working Principle
Fix redirect target only; avoid unnecessary redesign or rebuild.

## Next Step
Record the correct production portal URL and map every login / paid-access button to that exact destination.
