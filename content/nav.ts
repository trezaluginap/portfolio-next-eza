export type NavItem = {
  /** key into the dictionary `nav` object */
  key: "home" | "work" | "about" | "contact";
  href: string;
};

export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "work", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];
