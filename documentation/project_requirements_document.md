# Project Requirements Document (PRD)

## 1. Project Overview

This project is a single-page, SEO-optimized landing page for “Bibles and Jiu Jitsu,” a Christian fellowship group that combines Bible study with No-Gi Brazilian Jiu Jitsu training in Round Rock, Texas. The page is designed to promote the group, attract new members from the local community, and provide clear information about the group’s mission, upcoming session details (including the next session on April 26 at 5PM), contact options, and location. It will include a dynamic Instagram image grid using curated placeholder images and an embedded Google Maps section featuring the Renzo Gracie Round Rock address.

We are building this landing page to unite faith and fitness in a manner that is clear, engaging, and easy to navigate. Key objectives include providing an inspirational first impression, ensuring fast load times, improving local search rankings through robust SEO practices (like semantic HTML and structured JSON-LD data), and using a tech stack based on Astro, Tailwind CSS, and shadcn UI components. The design will follow a modern, clean aesthetic that reflects the group’s values and resonates with adults looking for a unique community experience.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   A single-page, static landing page built with Astro for pre-rendered HTML.
*   A hero section featuring a headline (“Faith Meets Fitness at Bibles and Jiu Jitsu”), subheadline, and a clear call-to-action button linking to the contact section.
*   An about section that explains the group’s mission and inclusivity using SEO-friendly headings and rich keywords.
*   A session details section that outlines the next session on April 26 at 5PM, complete with details on the session format, recommended attire, and location information.
*   An Instagram grid section featuring carefully curated placeholder images with descriptive alt text.
*   A location section embedding a Google Maps iframe for Renzo Gracie Round Rock (2051 Gattis School Rd, Ste 600) along with a link to Google Maps directions.
*   A call-to-action/contact section integrated with Formspree (if available) or a fallback mailto link to minimize spam.
*   A footer with key links, the group’s logo, and a reinforcing tagline (“Faith. Fitness. Fellowship.”).
*   SEO enhancements including meta tags, open graph data, structured JSON-LD for Organization, LocalBusiness, and Event.
*   Google Analytics integration via Astro plugin or a simple script tag.

**Out-of-Scope:**

*   Advanced backend functionality; the website is completely static.
*   A live Instagram feed integration; only curated placeholder images will be used for now.
*   Testimonials section (removed as it is not needed in this version).
*   Frequent automated updates or a dynamic admin panel for content updates; session dates and images will be manually updated as necessary.
*   Custom animations or heavy micro-interactions beyond simple scroll animations and lazy-loading images.

## 3. User Flow

When a visitor lands on the page, they are immediately greeted by a welcoming hero section that highlights the fusion of Bible study and No-Gi Jiu Jitsu with a bold headline and a supporting subheadline. The call-to-action button entices them to join a session or make an inquiry. As they scroll, visitors encounter an about section that clearly explains the mission of “Bibles and Jiu Jitsu,” emphasizing the inclusive and community-driven aspect of the fellowship.

After learning about the group, users are directed to the session details section where they see the upcoming session on April 26 at 5PM, along with important information on what to wear and what to expect. Below this, a visually engaging Instagram image grid (using placeholder images) adds life to the page. Further down, an embedded Google Maps section provides location details and a directions link, ensuring visitors can easily find Renzo Gracie Round Rock. The journey concludes with a contact section and a succinct footer that reinforces the group’s branding and invites users to reach out for more information.

## 4. Core Features (Bullet Points)

*   **Hero Section:**

    *   Strong headline () such as “Faith Meets Fitness at Bibles and Jiu Jitsu.”
    *   Subheadline that explains the group’s mission.
    *   Prominent CTA button (e.g., “Join Us”) linked to the contact section.
    *   SEO-friendly with proper heading structures and meta data.

*   **About Section:**

    *   Clear description of the group’s purpose and mission.
    *   Inclusive language inviting all adults to join, with SEO keywords like “Christian fellowship Round Rock” and “No-Gi Jiu Jitsu.”
    *   Use of semantic HTML headings (, ).

*   **Session Details Section:**

    *   Information about the next session scheduled for April 26 at 5PM.
    *   Brief session format description (No-Gi Jiu Jitsu lesson followed by Bible study).
    *   Attire guidelines and location mention.
    *   SEO enhancements with structured data (JSON-LD for events).

*   **Instagram Grid Section:**

    *   Responsive grid of placeholder images styled for mobile and desktop views.
    *   Each image includes descriptive and SEO-friendly alt attributes.
    *   Images link out to the Instagram page.

*   **Location Section:**

    *   Embedded Google Maps iframe for Renzo Gracie Round Rock.
    *   Static link to Google Maps directions.
    *   Supporting copy with SEO-optimized text and JSON-LD for LocalBusiness.

*   **Call-to-Action/Contact Section:**

    *   Easy-to-use contact form integration via Formspree (or fallback mailto link).
    *   Keyword-rich call-to-action prompting user engagement.

*   **Footer:**

    *   Brand logo and a short tagline (“Faith. Fitness. Fellowship.”).
    *   Additional links (contact email, Renzo Gracie Round Rock website).

*   **SEO & Performance:**

    *   Prerendered HTML using Astro for fast load times.
    *   Lazy-loading images, semantic HTML usage, and structured meta tags.
    *   Google Analytics integration for tracking.

## 5. Tech Stack & Tools

*   **Frontend Framework & Static Site Generator:**

    *   Astro for static site generation and pre-rendered HTML.

*   **Styling & UI Components:**

    *   Tailwind CSS for utility-first styling and responsive design.
    *   Shadcn components for consistent UI elements such as buttons and navigation menus.

*   **Hosting:**

    *   GitHub Pages, deploying the Astro-produced dist/ folder.

*   **SEO & Analytics:**

    *   Built-in meta tags, open graph tags, and structured JSON-LD data.
    *   Google Analytics integrated using Astro plugins or a simple script tag.

*   **Additional Integrations:**

    *   Instagram placeholder images since no live feed will be used initially.
    *   Embedded Google Maps using an for location display.
    *   Contact integration via Formspree or a mailto link as a fallback.

*   **Development Tools:**

    *   Bolt for quick project setup and best practices scaffolding.
    *   Any preferred editors with plugin support (e.g., VS Code with Tailwind CSS IntelliSense).

## 6. Non-Functional Requirements

*   **Performance:**

    *   Page load time under 2 seconds (verified via Lighthouse).
    *   Optimized images using modern formats (e.g., WebP) and lazy-loading.

*   **Security:**

    *   Minimal third-party scripts to reduce vulnerability exposure.
    *   Use of free, trusted services for contact forms to mitigate spam.

*   **SEO & Accessibility:**

    *   Semantic HTML (use of , , , etc.) for improved SEO.
    *   Structured data (JSON-LD for Organization, LocalBusiness, Event) integrated.
    *   Fast, responsive design ensuring optimal mobile and desktop user experiences.

*   **Usability:**

    *   Simple, intuitive navigation with a sticky header and anchor links.
    *   Mobile-responsive layout with clear visual hierarchy.
    *   Readable text using sans-serif fonts (Inter or Poppins).

## 7. Constraints & Assumptions

*   **Constraints:**

    *   The entire site is statically hosted with no backend dynamic content.
    *   Reliance on free tools and hosting (GitHub Pages, Formspree free tier) to keep costs low.
    *   Limited dependencies to ensure small build size.

*   **Assumptions:**

    *   The target audience primarily uses modern browsers that support static HTML5 and CSS3.
    *   Marketing updates and session details (like date/time) will be manually updated.
    *   The curated Instagram placeholder images are acceptable until an active Instagram image flow is established.
    *   Google Analytics and SEO practices will be enough to initially drive engagement and measure success.

## 8. Known Issues & Potential Pitfalls

*   **Instagram Integration:**

    *   Although there is an existing Instagram account, since it lacks images, using placeholders is required. Future integration might require more complex client-side fetching which can complicate the static build.
    *   Mitigation: Use curated images and provide clear alt text for SEO, planning for a possible dynamic integration later.

*   **SEO Challenges:**

    *   Ensuring all SEO best practices are met in a static page may require periodic manual updates, especially for session details and meta tags.
    *   Mitigation: Define standard procedures for updating SEO metadata and use Astro’s capabilities for automated sitemap generation.

*   **Contact Form Reliability:**

    *   Relying on free services like Formspree can lead to service limits or spam issues.
    *   Mitigation: Implement a fallback mailto link and consider lightweight spam filtering techniques.

*   **Browser Compatibility & Responsive Design:**

    *   Ensuring a seamless responsive experience across all devices must be thoroughly tested.
    *   Mitigation: Use Tailwind CSS breakpoints and conduct multi-device testing early in the development phase.

# Website Copy Draft

Below is an initial draft of the website copy for key sections:

**Hero Section:**

*   Headline: “Faith Meets Fitness at Bibles and Jiu Jitsu”
*   Subheadline: “Grow spiritually and physically in Round Rock with Bible study and No-Gi Jiu Jitsu.”
*   CTA Button: “Join Us” (links to the Contact section)

**About Section:**

*   Heading: “Our Mission”
*   Paragraph: “Join Bibles and Jiu Jitsu at Renzo Gracie Round Rock as we unite God’s Word and martial arts in a welcoming community. Whether you’re seasoned in Jiu Jitsu or new to Bible study, our fellowship is open to all adults seeking balance between spiritual growth and physical fitness.”

**Session Details Section:**

*   Heading: “Next Session”
*   Content: “Mark your calendar for April 26 at 5PM. Enjoy a dynamic session featuring a No-Gi Jiu Jitsu lesson followed by an inspiring Bible study. Dress in a rash guard and shorts—don’t forget your Bible if you have one!”

**Instagram Grid Section:**

*   Heading (optional): “Community Highlights”
*   Note: Display a responsive grid of curated placeholder images. Each image will have descriptive alt text such as “Bibles and Jiu Jitsu fellowship in action.”

**Location Section:**

*   Heading: “Hosted by Renzo Gracie Round Rock”
*   Address: “2051 Gattis School Rd, Ste 600, Round Rock, TX 78664”
*   Link Text: “Get Directions” (links to Google Maps directions)
*   Paragraph: “Join us at Renzo Gracie Round Rock for an experience that blends faith and fitness.”

**Call-to-Action/Contact Section:**

*   Heading: “Ready to Grow?”
*   Content: “Have questions or ready to join? Contact us at [contact form/ email link].”
*   A friendly prompt to encourage inquiries, using a free form service if available (Formspree) or a simple mailto link.

**Footer:**

*   Content: “Faith. Fitness. Fellowship.” along with the group logo and additional links (contact email, Renzo Gracie Round Rock website).

This PRD provides a complete and clear reference for building the “Bibles and Jiu Jitsu” landing page. It covers the project overview, clearly defined features, tech stack, user flow, expected non-functional requirements, and potential risks. All subsequent technical documentation (Tech Stack Document, Frontend Guidelines, Backend Structure, etc.) can be directly derived from this document with no ambiguity.
