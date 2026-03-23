# Pictory Embed Issue

**Status:** Archived  
**Project:** Foundation Course portal video delivery  
**Tags:** #chat-archive #pictory #embed #video #portal #foundation-course #netlify

## Objective
Resolve how to deliver Day 2 and related course videos inside the course portal when direct YouTube upload or prior video methods were limiting playback.

## Main Issue
The user had Day 2 videos ready in Pictory, but there were limitations around using YouTube directly in the portal workflow. The discussion focused on whether Pictory embeds could be used and how the portal handled embedded versus uploaded videos.

## Key Discussion Points
- User wanted to understand what problem was being solved before continuing
- The portal had been updated to support embedded playback
- Question was raised why Day 1 had not originally used embedded Pictory videos
- User preferred robot-style instructions to complete the setup quickly

## Technical Context
- The working portal file referenced in discussion was:
  `src/pages/FoundationCoursePortal.tsx`
- The portal had been adjusted to support iframe/video embedding behavior
- Netlify deploy behavior was part of the validation path

## Main Insight
Once embedded playback support was available, Pictory or hosted video embeds could be used inside the portal instead of relying only on prior upload methods.

## Next Step
Document the exact embed format supported by the portal and standardize the Day 2+ lesson video format.
