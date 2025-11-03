export interface StaticWork {
  id: string;
  slug: string;
  title: string;
  thumbnail_image: string | null;
  category: string;
  description: string;
  tags: string[] | null;
  external_link: string | null;
  case_study_body: string;
}

export const staticWorks: StaticWork[] = [
  {
    id: "1",
    slug: "ecommerce-accessibility",
    title: "E-Commerce Platform Accessibility Overhaul",
    thumbnail_image: null,
    category: "Accessibility Audit",
    description:
      "Transformed a leading e-commerce platform to meet WCAG 2.2 AA standards, resulting in 40% increase in conversions from users with disabilities.",
    tags: ["WCAG 2.2", "E-Commerce", "Screen Readers"],
    external_link: null,
    case_study_body: `
      <h2>Opening the digital doors for every shopper</h2>
      <p>
        The retailer's flagship storefront was built on a legacy system that made it
        difficult for screen reader users and shoppers navigating with a keyboard to
        complete purchases. We partnered with their engineering and design teams to
        run automated and manual audits, prioritize the most impactful issues, and
        pair on remediation.
      </p>
      <h3>What we delivered</h3>
      <ul>
        <li>WCAG 2.2 AA audit with 120+ actionable findings</li>
        <li>Reusable accessible component patterns for the design system</li>
        <li>Training sessions focused on assistive technology testing</li>
      </ul>
      <p>
        Within eight weeks the conversion rate for shoppers using assistive
        technology increased by 40% and customer support tickets related to
        accessibility dropped by 65%.
      </p>
    `,
  },
  {
    id: "2",
    slug: "healthcare-ux-research",
    title: "Healthcare App UX Research",
    thumbnail_image: null,
    category: "UX Research",
    description:
      "Conducted comprehensive user research with elderly patients to redesign a telehealth platform for improved usability and accessibility.",
    tags: ["Healthcare", "User Research", "Inclusive Design"],
    external_link: null,
    case_study_body: `
      <h2>Bridging the gap between patients and providers</h2>
      <p>
        We facilitated diary studies and moderated interviews with patients ranging
        from 60 to 85 years old. Insights from these studies informed a refreshed
        IA, simplified appointment flow, and voice-assisted navigation patterns for
        the telehealth product.
      </p>
      <h3>Highlights</h3>
      <ul>
        <li>35 in-depth interviews with patients and caregivers</li>
        <li>Heuristic evaluation mapped to Section 508 and WCAG 2.2</li>
        <li>Prototype testing sessions that validated the redesigned flow</li>
      </ul>
      <p>
        The final experience saw a 28% reduction in support calls and boosted
        appointment completion rates for first-time users by 22%.
      </p>
    `,
  },
  {
    id: "3",
    slug: "banking-inclusive-design",
    title: "Banking App Inclusive Redesign",
    thumbnail_image: null,
    category: "UI/UX Design",
    description:
      "Reimagined a mobile banking experience to serve users with cognitive disabilities, low vision, and motor impairments.",
    tags: ["Finance", "Mobile Design", "Cognitive Accessibility"],
    external_link: null,
    case_study_body: `
      <h2>Designing trust into everyday banking</h2>
      <p>
        Our team collaborated with product and compliance stakeholders to identify
        friction points in the existing mobile app. We then built accessible design
        tokens, clarified copy, and introduced guided task flows for common
        scenarios like paying bills or sending money.
      </p>
      <h3>Outcomes</h3>
      <ul>
        <li>New component guidelines covering motion, color, and focus management</li>
        <li>Improved error recovery patterns validated through usability testing</li>
        <li>Hand-off documentation to accelerate engineering adoption</li>
      </ul>
      <p>
        The redesigned app launched to a 4.8 star rating in the app stores and
        earned positive feedback from the bank's accessibility council.
      </p>
    `,
  },
  {
    id: "4",
    slug: "education-platform-audit",
    title: "Educational Platform Audit & Training",
    thumbnail_image: null,
    category: "Design Audit",
    description:
      "Performed detailed accessibility audit and provided team training for a major online learning platform reaching millions of students.",
    tags: ["Education", "Audit", "Team Training"],
    external_link: null,
    case_study_body: `
      <h2>Empowering educators to ship inclusive learning</h2>
      <p>
        The platform's content creation tooling made it hard for instructors to
        produce accessible lessons. We catalogued the most common pitfalls,
        delivered quick-win recommendations, and created a scalable training
        curriculum for the product teams.
      </p>
      <h3>Key results</h3>
      <ul>
        <li>Audit coverage of 20+ core templates and authoring workflows</li>
        <li>Accessibility scorecard that feeds directly into product planning</li>
        <li>Workshops that upskilled 60+ designers, PMs, and engineers</li>
      </ul>
      <p>
        Six months post-engagement, the company reported a 3x increase in courses
        passing internal accessibility reviews.
      </p>
    `,
  },
];

export interface StaticInsight {
  id: string;
  slug: string;
  title: string;
  featured_image: string | null;
  description: string;
  body: string;
  author_name: string;
  published_date: string;
}

export const staticInsights: StaticInsight[] = [
  {
    id: "1",
    slug: "scaling-accessibility-programs",
    title: "Scaling Accessibility Programs That Last",
    featured_image: null,
    description:
      "A practical framework for building accessibility programs that grow with your organization.",
    body: `
      <p>
        Accessibility maturity is rarely achieved in a single quarter. We outline
        the playbook we use with teams who are serious about weaving inclusive
        practices into their product development lifecycle.
      </p>
      <h3>Start with alignment</h3>
      <p>
        Define what success looks like and secure executive sponsorship early. A
        shared vision accelerates decision making and keeps the work resourced.
      </p>
      <h3>Invest in the team</h3>
      <p>
        Create space for continuous learning, pair audits with coaching, and
        celebrate wins that demonstrate the customer impact of accessibility.
      </p>
    `,
    author_name: "Jordan Brooks",
    published_date: "2024-01-18",
  },
  {
    id: "2",
    slug: "accessible-design-systems",
    title: "Design Systems as Accessibility Accelerators",
    featured_image: null,
    description:
      "Why accessible component libraries reduce delivery risk and boost product velocity.",
    body: `
      <p>
        Component libraries are the connective tissue between design and
        engineering. When accessibility is baked into the system, every product team
        ships higher quality experiences with less rework.
      </p>
      <ul>
        <li>Codify accessible interaction patterns</li>
        <li>Document inclusive content guidance</li>
        <li>Automate linting and testing wherever possible</li>
      </ul>
      <p>
        The result is a faster path from concept to launch with accessibility guard
        rails turned on by default.
      </p>
    `,
    author_name: "Avery Chen",
    published_date: "2024-03-05",
  },
];

