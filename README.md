# ByteSpace — Online Learning & Digital Creation Platform

> A responsive, high-performance web application built from Figma design specifications to connect digital creators and learners through intuitive course discovery, curriculum exploration, interactive video previews, and modern authentication.

---

## Demo Credentials

To test the login authentication flow, I have pre-configured the following dummy credentials:

| Field | Demo Value |
| :--- | :--- |
| **Email** | designer@example.com |
| **Password** | password123 |

*(Note: Any valid non-empty email and password will also authenticate successfully in this prototype).*

---

## Tech Stack Used

- **Frontend Framework**: React 19 — Functional component architecture, custom hooks, and state management.
- **Language**: TypeScript — Strict type safety for data models (Course, User, Review, CourseModule), props, and navigation state.
- **Styling & UI**: Tailwind CSS 4 — Modern utility classes, CSS grid layouts, custom SVG 3D clay elements, backdrop blur, and fluid responsive breakpoints.
- **Icons**: Lucide React — Lightweight, consistent icon set.
- **Build Tool**: Vite 6 — Ultra-fast development server and optimized production bundler.
- **Image Assets**: Customized local assets (log1.png, log2.png, boy_headphones_laptop_1790798262701.png, girl.png, spiral.png) for authentic character representations and mockups.

---

## Submission Overview

### 1. What I Built & Completed

I developed a full-featured, pixel-accurate online learning platform based on the Figma design files, implementing all 6 core screen experiences and end-to-end interactive user flows:

- **1. Home Page (6 Complete Sections)**:
  - **Hero Section**: Built a bold headline banner with an active search bar, dynamic category chips, ambient glow effects, floating student metric badges, and custom 3D clay elements (Lime Torus, Spiral, White Clay Squiggle, Yellow Pyramid).
  - **Curated Course Catalog**: Implemented a dynamic course grid with real-time filtering across 18+ categories, difficulty level badges (Beginner, Intermediate, Advanced), student avatar stacks, lesson counts, and lifetime pricing tags.
  - **Explore Diverse Learning Paths**: Designed 6 category tiles (Design, Development, IT & Software, Business, Marketing, Photography) featuring custom vector iconography and smooth hover micro-animations.
  - **Expand Your Career Section**: Crafted the visual composition using the enlarged student cutout holding a laptop, the *Learn Figma from Basic* course card, and the floating *Learning Progress (55%)* card positioned cleanly on the right side of the student.
  - **Creator Feature Spotlight**: Created the *Create and manage courses easily* section with the creator cutout, *Total Revenue ($120.29)*, *Year to Date ($1,200.38)* analytics badges, and student satisfaction metrics.
  - **Student Testimonials**: Built the student reviews and feedback card slider highlighting authentic community proof.
  - **Global Footer**: Implemented the newsletter subscription form, platform directories, social media links, and copyright statement.

- **2. Course Discovery & Search (`SearchPage.tsx`)**:
  - Implemented live, instant keyword searching across course titles, creators, and descriptions.
  - Added multi-criteria filtering by category and difficulty level.
  - Added price sorting (low-to-high, high-to-low) and rating sorting with empty-state resets.

- **3. Course Details Page (`CourseDetailsPage.tsx`)**:
  - **Hero Banner**: Includes course titles, ratings, review counts, student enrollment figures, level pills, and a working **Share** button that copies the URL to the clipboard with confirmation.
  - **Hero Video Preview**: Displays the exact course thumbnail with an interactive video player overlay on play click.
  - **About Tab**: Shows the comprehensive course description, key learning points with checkmarks, and a 4-image sneak peek gallery.
  - **Lessons Tab**: Structured curriculum modules with collapsible accordions, individual lesson durations, and playable preview tags.
  - **Reviews Tab**: Star rating filters (All, 5-Star, 4-Star, 3-Star, 2-Star, 1-Star) with verified student reviews.
  - **Sticky Purchase Sidebar**: Sticky sidebar detailing lesson count, duration breakdown, syllabus preview, and cart actions.

- **4. Creator Profile Page (`CreatorProfilePage.tsx`)**:
  - Creator profile for *PurePearl Studio* with verified badge, follower count, bio, and an interactive **Follow / Unfollow** toggle.
  - Tabbed switching between published courses and aggregated student reviews.

- **5. Authentication Pages (`LoginPage.tsx` & `SignupPage.tsx`)**:
  - Recreated the Figma visual composition featuring 3D decorative shapes (Lime Torus, Yellow Pyramid, White Squiggle), the two stacked course preview cards (`log2.png` and `log1.png`), and the lime *Happy Students* badge.
  - Built clean, right-aligned Sign-In and Sign-Up forms matching Figma specs, including password validation and social login options (Facebook and Google).

- **6. Slide-Out Cart & Checkout Drawer (`CartModal.tsx`)**:
  - Built an interactive shopping cart drawer where users can review added courses, remove items, calculate totals, and simulate checkout with toast notifications.

---

## Special Instructions to Review My Work

1. **Seamless Application Navigation**:
   - Navigate freely across the application using the main navigation bar (Home, Explore/Courses, Search, Sign In, Sign Up), footer links, course cards, and creator profile links.

2. **Course Card to Detail Image Consistency**:
   - Click on any course card from the Home Page or Search Page. The video preview image inside the Course Details hero matches the exact preview thumbnail shown on the card.
3. **Interactive Video Preview**:
   - On the Course Details page, click the circular play button on the hero preview card to launch the interactive video player. Click *Close Preview* to return to the thumbnail.
4. **Search and Filtering**:
   - Navigate to the Search page or click any category pill on the Home page. Test typing search keywords, filtering by category/level, or sorting by price to verify instant list updates.
5. **Cart & Enrollment Simulation**:
   - Click "Enroll Now" or "Add to Cart" to open the slide-out cart drawer, view the items, and proceed to checkout to receive a confirmation toast.
6. **Responsive Layout Check**:
   - Test across mobile (375px, 640px), tablet (768px, 1024px), and desktop (1280px+) screen widths to verify that all cards, 3D elements, and navigation smoothly adapt.

---

## Additional Notes & Design Decisions

- **Brand Colors & Typography**: I strictly followed the Figma visual guidelines, using the vibrant neon lime accent (#C9F31D), deep electric blue (#0052FF), subtle grid patterns (bg-grid-blue), and high-contrast typography.
- **Card Alignment & Placement**: I carefully positioned the *Learning Progress (55%)* card on the right side of the boy cutout (below the spiral and above the laptop) to ensure his face and headphones are clear.
- **Authentication Visual Pattern**: Both the Login and Signup pages use the updated layout with log2.png (*the Power of Big Data*) on the back card and log1.png (*Build Digital Asset...*) on the front card, paired with the lime Happy Students badge and 3D geometric shapes.
- **Accessibility & Performance**: All interactive buttons feature accessible hover and focus states, semantic HTML elements (header, main, section, aside, footer), and clean zero-error TypeScript compilation.

---

## Deployment on Vercel

This project is pre-configured for deployment on Vercel:

1. **Framework Preset**: Vite (detected automatically).
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **SPA Rewrites**: Handled by the included `vercel.json` to ensure clean client-side routing on direct reloads and deep links.

To deploy via Vercel CLI:
```bash
npm i -g vercel
vercel
```
Or import the repository directly in the Vercel dashboard.
