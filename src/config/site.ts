export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "Freedom Farms",
  description: "Saving the Planet Profitably.",
  navItems: [
    { title: "About", href: "/about" },
    { title: "Events", href: "/events" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
};
