export type ProjectTag = {
  label: string;
  tone: "blue" | "green";
};

export type Project = {
  id: string;
  theme: "ink" | "forest";
  title: string;
  subtitle: string;
  /** Optional accent word rendered in mint inside the subtitle (e.g. "Geo"). */
  subtitleAccent?: string;
  tags: ProjectTag[];
  variant: "orbit" | "delivery";
};

export const projects: Project[] = [
  {
    id: "scrollers-to-readers",
    theme: "ink",
    title: "Scrollers to Readers",
    subtitle: "A Book Reading App That Converts Non-Readers into Book Lovers",
    tags: [
      { label: "case study", tone: "blue" },
      { label: "coming soon", tone: "blue" },
    ],
    variant: "orbit",
  },
  {
    id: "pagarbook-order-management",
    theme: "forest",
    title: "Empowering Distribution with Optimized Order Management",
    subtitle: "Order Management / PagarBook",
    subtitleAccent: "Geo",
    tags: [{ label: "Case Study", tone: "green" }],
    variant: "delivery",
  },
];
