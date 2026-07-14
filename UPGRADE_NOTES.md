# v26 Upgrade Notes

## Design direction

The new system moves away from a crowded media-template appearance and toward a profile-led premium editorial identity. The visual language combines dark cinematic sections, restrained red and blue light, translucent iOS-style materials, large serif display typography, real photography, and compact interface controls.

## Header

- Removed the top color bar and scrolling ticker.
- Converted the header into a floating blurred glass capsule.
- Reduced the number of desktop navigation items.
- Kept a dedicated contact action.
- Rebuilt the language switch as a compact segmented control.
- Added safer mobile-menu behavior: body scroll lock, outside-click closing, Escape-key closing, and synchronized ARIA state.

## Homepage

- Repositioned Antoine Gregory as the primary brand profile.
- Reduced the opening copy to one clear positioning statement.
- Kept the supplied Instagram reach and publishing figures.
- Replaced the five-column explanatory block with three concise capabilities.
- Added a selected-work presentation and a direct local-video feature.

## Sports page

- Replaced the generic subpage treatment with a cinematic sports hero.
- Simplified the board controls.
- Restyled league selection, status, standings, fixtures, and scorers as a glass dashboard.
- Preserved the existing Supabase Edge Function workflow and demo fallback.
- Kept the Haitian All-Star Game as the local identity anchor.

## Contact and promotion

- Kept the existing email, phone, Instagram, and Zoho form.
- Removed unnecessary pricing explanation and repeated instructions.
- Reframed promotion into three clear service categories and a three-step process.

## Footer

- Replaced the four-column utility footer with a premium collaboration call to action, a concise brand statement, essential links, and direct contact information.

## Accessibility and resilience

- Visible focus states remain available.
- Language buttons update `aria-pressed`.
- The document language updates with the selected language.
- Public Supabase content remains escaped before DOM insertion.
- Motion respects `prefers-reduced-motion`.
- Content stays visible when JavaScript is unavailable; reveal animations activate only after the main script starts successfully.
