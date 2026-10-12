export const site = {
  name: "Treza Lugina Pamungkas",
  shortName: "Treza",
  role: {
    en: "Software Engineer - Mobile & Backend",
    id: "Software Engineer - Mobile & Backend",
  },
  url: "https://treza-portfolio-trezas-projects.vercel.app",
  location: {
    en: "Indonesia",
    id: "Indonesia",
  },
  email: "trezapam@gmail.com",
  socials: {
    github: "https://github.com/trezaluginap",
    linkedin: "https://www.linkedin.com/in/treza-pamungkas/",
    instagram: "https://www.instagram.com/trezapmngks_",
  },
  // Focus line shown in hero meta
  focus: "Web & App · Internet of Things",
} as const;

export type SocialKey = keyof typeof site.socials;
