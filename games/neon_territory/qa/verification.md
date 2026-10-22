# NEON TERRITORY 0.5.0 verification

Date: 2026-10-23 (Asia/Seoul).

- `node --test tests/*.test.cjs`: 46 tests passed (engine, input, persistence, integrated application).
- Public GitHub Pages build loaded in the in-app browser without JavaScript warnings or errors.
- Actual keyboard play: enclosed an empty rectangle, gained 3.9%, scored 504 points, retained all three lives.
- Split-only capture showed the specific explanation that enemies remained on both sides.
- Reload restored captured territory, score, timer, lives and paused state; play resumed only after confirmation.
- Direction-pad drag, stage-selection confirmation, pause/resume, and menu access worked in the browser.
- Checked desktop 1280×800 and mobile viewports 390×844, 320×568, 844×390, 568×320.
- At 320×568 all core controls ended above y=458; no horizontal overflow.
- At 568×320 direction keys were 44×44 and action buttons at least 100×44; no horizontal overflow or clipped controls.
- Stage, records and help remain reachable from the landscape menu.

These are browser viewport and simulated-input checks, not physical iPhone/Android device certification. Ten-stage mechanics and terminal states were tested in the engine suite; the campaign was not manually cleared end to end.

Screenshots: `mobile-portrait.jpg` and `mobile-landscape.jpg`.
