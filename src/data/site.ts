export const site = {
  name: "Andrew Enger",
  title: "Andrew Enger",
  description:
    "Andrew Enger is a full-stack software engineer in New York, currently at CLEAR.",
  url: "https://www.anenger.com",
  location: "New York, NY",
  repo: "https://github.com/anenger/my-portfolio-v2",
};

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/anenger" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrew-enger/" },
  { label: "Email", href: "mailto:hi@anenger.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export interface Role {
  company: string;
  url?: string;
  title: string;
  range: string;
  location: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: "CLEAR",
    url: "https://www.clearme.com/",
    title: "Software Engineer II",
    range: "Apr 2025 – Present",
    location: "New York, NY",
    highlights: [
      "Built the EGate member verification frontend on top of CLEAR and TSA APIs, rolled out to 30+ airports. Lane-to-TSA time dropped from 2–3 minutes to 20–30 seconds.",
      "Shipped EnVe features that recovered $200K+ from churned customers, with Datadog monitoring for rollouts.",
      "Re-architected GitHub Actions CI/CD, halving execution time per run.",
      "Automated LaunchDarkly feature flag cleanup with Claude Code workflows.",
    ],
  },
  {
    company: "Microsoft",
    url: "https://loop.cloud.microsoft/",
    title: "Software Engineer",
    range: "Aug 2022 – Apr 2025",
    location: "Redmond, WA",
    highlights: [
      "Integrated Microsoft Loop pages into Copilot Chat, increasing average session duration by 10+ minutes.",
      "Migrated the Loop frontend to Fluent UI v9, reducing rendering errors and improving UI performance.",
      "Built Substrate APIs to expand sharing of Loop components across Microsoft 365.",
    ],
  },
  {
    company: "Wellframe",
    title: "Software Development QA Co-op",
    range: "Feb 2021 – Jun 2021",
    location: "Boston, MA",
    highlights: [
      "Built end-to-end test suites in Java with Selenium WebDriver, plus Python/MySQL pipelines seeding mock healthcare data into CI.",
    ],
  },
  {
    company: "TripAdvisor",
    title: "IT Operations Engineer Co-op",
    range: "Jan 2020 – Jun 2020",
    location: "Needham, MA",
    highlights: [
      "Wrote automation scripts to streamline IT service management.",
    ],
  },
];

export interface Project {
  name: string;
  url?: string;
  role: string;
  range: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "Alto Visuals",
    url: "https://treatments-feedback.alto.site/",
    role: "Full-stack Developer",
    range: "2024",
    description:
      "An AI-powered web app that analyzes media treatments and gives feedback for creative development. Next.js frontend, Flask backend, PostgreSQL and Redis.",
  },
  {
    name: "SecureCop",
    role: "Founder",
    range: "2014 – 2021",
    description:
      "Node.js and Python automation for web scraping and inventory monitoring that generated over $1M in gross revenue.",
  },
  {
    name: "J. Patryce & Co",
    url: "https://jpatryceandco.com/",
    role: "IT Consultant",
    range: "2019 – Present",
    description:
      "Ad-hoc IT support and consulting. Migrated a legacy Dropbox file-sharing setup to Microsoft 365 OneDrive and manage email on Microsoft Exchange.",
  },
];

export interface School {
  name: string;
  degree: string;
  range: string;
  details: string;
}

export const education: School[] = [
  {
    name: "Northeastern University",
    degree: "B.S. Computer Science, cum laude",
    range: "2018 – 2022",
    details: "6x Dean's List, Dean's Scholarship.",
  },
];
