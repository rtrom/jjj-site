flowchart TD
    A[Start]
    B[Load Landing Page]
    C[Navigation Bar]
    D[Hero Section: Headline, Subheadline, CTA]
    E[CTA Decision]
    F[About Section: Mission and Inclusivity]
    G[Session Details: Date, Time, Format, Attire]
    H[Instagram Grid: Curated Images]
    I[Location: Google Maps Embed and Directions]
    J[Contact Section: Formspree or mailto fallback]
    K[Footer: Links, Logo, Tagline]
    L[End]

    A --> B
    B --> C
    B --> D
    D --> E
    E -- Yes, CTA clicked --> J
    E -- No, or Scroll Down --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L