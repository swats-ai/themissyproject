export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  caption: string;
}

export interface ImpactCard {
  icon: string;
  title: string;
  description: string;
}

export interface KnowledgePanel {
  title: string;
  eyebrow: string;
  items: Array<{ text: string; bold?: string[] }>;
}

export interface StepperItem {
  label: string;
}

export interface FooterLinkColumn {
  title: string;
  links: NavLink[];
}
