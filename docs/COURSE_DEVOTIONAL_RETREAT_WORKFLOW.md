# Rise to Thrive — Course ↔ Devotional ↔ Retreat Workflow
**Status:** Approved development requirement; integration is not yet implemented.  
**Owner:** Rise to Thrive Hub / Transforming Pain Into Power™  
**Source of truth for every new course and companion journey:** This document in `risetothriveacademy/academy-hub`.  
**Companion app:** private `risetothriveacademy/transforming-pain-into-power-devotional-app`.  
**Brand palette:** private `risetothriveacademy/transforming-pain-into-power-brand-assets/brand-guidelines/MASTER_COLOR_PALETTE.md`.

## Required sequence whenever a Hub course is created or changed

1. **Register the Hub course:** assign a durable `courseId` and URL/slug, title, summary, status, and price (do not assume every future course costs $49). Reuse an existing course's ID on updates. Do not expose unverified purchase links.
2. **Register its companion devotional journey:** use a stable `journeyId` / `courseId` mapping; create a 30-day journey shell in the Devotional App if there isn't one already. The journey can have title, introduction, 30-day index, and `Coming Soon` status while its approved content is being prepared. Do not create invented or AI-finalized manuscripts automatically.
3. **Add Hub → App invitation on the course detail page**, clearly separate from purchase controls and not interrupting the course lesson:
   > **Prefer to begin with Scripture and prayer? Explore the companion 30-Day Devotional Journey.**
   Link the invitation to the matching journey overview page **only after the route is implemented and verified**. Until then, show a non-clickable `Coming Soon` message; never install a broken link.
4. **Add App → Hub invitation:** on the companion journey overview and/or after the final Day 30 reflection and Prayer of Surrender, offer an optional card:
   > **Would you like to explore this topic in greater depth? Discover the corresponding Rise to Thrive Recovery Course.**
   Use the matching verified Hub course URL. Do not put purchase prompts over Scripture, during prayer, or in a private journal.
5. **Add optional retreat discovery:** offer `Explore Our Retreats` on the journey overview or completion screen, subject to `retreat.enabled` and a verified destination. The currently proposed destination is `https://risetothrive-hub.com/retreat`; verify before activation. Never imply that completion or retreat attendance guarantees healing.
6. **Review and test both directions:** Hub course → corresponding App journey; App journey → same Hub course; App/Hub → optional retreat. Preserve design palette, existing course pages, progress, privacy, and working links.
7. **Get approval before release:** keep new devotional manuscript content and links disabled/Coming Soon until reviewed. Use a branch/preview; do not merge or publish without Diane's approval.

## Companion mapping: recommended shared metadata
```json
{
  "courseId": "stable-course-id",
  "courseSlug": "existing-hub-route-slug",
  "courseTitle": "Course title",
  "hubCourseUrl": null,
  "journeyId": "stable-journey-id",
  "journeySlug": "corresponding-devotional-slug",
  "journeyTitle": "Companion 30-Day Devotional Journey",
  "appJourneyUrl": null,
  "journeyDays": 30,
  "contentStatus": "coming-soon",
  "approvedManuscripts": 0,
  "retreatInvitationEnabled": false,
  "approvedForRelease": false
}
```
- Maintain `courseId` ↔ `journeyId` as a one-to-one mapping for the standard companion journey; explicitly document exceptions, if any.
- The initial library is 3 foundational 30-day journeys + 18 root-cause 30-day journeys = **630 days**. Their approved sequence and original `globalDay` values must never be renumbered because of later additions.
- Future courses add new journeys after the initial 630 or as a separate selectable topic; keep durable IDs. Journey-specific day 1–30 remains available for every topic.
- Updates to the Hub/app must not erase journal entries or reader progress.

## Planned automation versus what is live
**Design target:** publishing a new Hub course record could trigger a verified integration/API/webhook to register an **unpublished journey shell** in the devotional app and create cross-link metadata. That trigger must not invent manuscripts, publish a devotional, activate payment links, or expose private journals. This is **not yet connected**; until built and tested, Claude/developers must perform the two-repository workflow explicitly whenever a course is added.

## Privacy
- Private journal text stays separate from marketing/CRM, course sales, referral data, and any Hub integration.
- A cross-platform opt-in flow may share only explicitly authorized contact information and non-sensitive course/journey identifiers.
- The Devotional App is a faith-informed educational/reflection tool, not diagnosis, therapy, or crisis support.

## COPY/PASTE: Reusable Claude prompt for EACH new Hub course
```text
CLAUDE — ADD A NEW HUB COURSE + COMPANION DEVOTIONAL

Read docs/COURSE_DEVOTIONAL_RETREAT_WORKFLOW.md in
risetothriveacademy/academy-hub and follow it as the approved standard.
Use the master palette already recorded in the Brand Assets repository.

Course title: [INSERT APPROVED TITLE]
Hub course route/URL: [INSERT / VERIFY]
Course price and status: [INSERT / VERIFY]
Companion 30-day journey title: [INSERT TITLE]
Approved manuscript files supplied: [YES / NO]

Create/update the Hub course and register a stable courseId ↔ journeyId mapping.
Create its 30-day companion journey shell in the existing Devotional App
repository if not present. Keep manuscript slots Coming Soon until content
is supplied, reviewed and approved; do not generate a final manuscript.

On the HUB COURSE page, add exactly:
"Prefer to begin with Scripture and prayer? Explore the companion 30-Day
Devotional Journey."

On the APP journey page, provide the optional verified return link:
"Would you like to explore this topic in greater depth? Discover the
corresponding Rise to Thrive Recovery Course."

Include an optional Explore Our Retreats invitation in an appropriate
non-intrusive position, disabled until the destination is verified.

Preserve all current content, original 630-day numbering, reader progress,
private journals, existing branding and existing functionality.
Do not add broken links, publish, merge, or activate payments.
Implement on a branch and supply a working preview plus the list of
changed files for Diane and Ava's approval.
```
