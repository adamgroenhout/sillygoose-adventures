# Objective
Build a multi-page, functional React website that exactly reproduces the designs found in the `stitch` directory. The site will be hosted on GitHub Pages with the custom domain `sillygoose-adventures.site`.

# Key Files & Context
- `stitch/the_silly_goose_landing_page/screen.png`: Main Home Page reference.
- `stitch/adventure_the_alpine_solitude/screen.png`: Adventure Page 1 reference.
- `stitch/adventure_the_gala_of_crumbs/screen.png`: Adventure Page 2 reference.
- `stitch/adventure_the_urban_promenade/screen.png`: Adventure Page 3 reference.
- `src/components/`: Reusable UI components (Button, Card, Layout, etc.).
- `src/pages/`: Individual page components (Home, Alpine, Gala, Urban).
- `src/styles/`: Vanilla CSS modules or global sheets for the "Elegance", "Adventure", "Refined", and "Modern" vibes.

# Implementation Steps
1. **Initialize Project:**
   - Scaffold Vite + React + TS.
   - Set up `react-router-dom` for navigation between the four designs.
2. **Component Architecture:**
   - Create a shared `Navbar` and `Footer` that adapt to the current page's theme.
   - Implement reusable `Section`, `Hero`, and `Card` components that can be styled via props or CSS classes.
3. **Reproduce Each Design:**
   - **Home (The Silly Goose):** Focus on the "Elegance" vibe with serif typography, soft shadows, and the multi-section layout.
   - **Alpine Solitude:** Use a rugged "Adventure" aesthetic with technical tables and topographic map sections.
   - **Gala of Crumbs:** Implement the "Refined" culinary look with specialized menu cards and status trackers.
   - **Urban Promenade:** Create a sleek "Modern" metropolitan feel with vertical image cards and a dark newsletter section.
4. **Deployment & Custom Domain:**
   - Add `.github/workflows/deploy.yml` for automated GitHub Pages deployment.
   - Create `public/CNAME` for `sillygoose-adventures.site`.

# Verification & Testing
- Locally verify responsive behavior for all four pages.
- Ensure navigation between pages is seamless.
- Confirm successful deployment and domain mapping via GitHub Actions.
