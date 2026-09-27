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

export interface Logo {
  src: string;
  /** Dark-on-transparent logos that need flipping to stay visible in dark mode. */
  invertInDark?: boolean;
}

export interface Role {
  company: string;
  logo: Logo;
  url?: string;
  title: string;
  range: string;
  location: string;
}

export const experience: Role[] = [
  {
    company: "CLEAR",
    logo: { src: "/logos/clear.png", invertInDark: true },
    url: "https://www.clearme.com/",
    title: "Software Engineer II",
    range: "Apr 2025 – Present",
    location: "New York, NY",
  },
  {
    company: "Microsoft",
    logo: { src: "/logos/microsoft.png" },
    url: "https://loop.cloud.microsoft/",
    title: "Software Engineer",
    range: "Aug 2022 – Apr 2025",
    location: "Redmond, WA",
  },
  {
    company: "Wellframe",
    logo: { src: "/logos/wellframe.png" },
    url: "https://www.wellframe.com/",
    title: "Software Development QA Co-op",
    range: "Feb 2021 – Jun 2021",
    location: "Boston, MA",
  },
  {
    company: "TripAdvisor",
    logo: { src: "/logos/tripadvisor.png" },
    url: "https://www.tripadvisor.com/",
    title: "IT Operations Engineer Co-op",
    range: "Jan 2020 – Jun 2020",
    location: "Needham, MA",
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
  logo: Logo;
  url?: string;
  degree: string;
  range: string;
  details: string;
}

export const education: School[] = [
  {
    name: "Northeastern University",
    logo: { src: "/logos/northeastern.png" },
    url: "https://www.northeastern.edu/",
    degree: "B.S. Computer Science, cum laude",
    range: "2018 – 2022",
    details: "6x Dean's List, Dean's Scholarship.",
  },
];
