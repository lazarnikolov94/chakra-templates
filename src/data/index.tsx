export interface Category {
  name: string;
  id: string;
  children?: SubCategory[];
}

export interface SubCategory {
  name: string;
  id: string;
  children?: Template[];
}

export interface Template {
  name: string;
  filename: string;
}

export const data: Category[] = [
  {
    name: "Navigation",
    id: "navigation",
    children: [
      {
        name: "Navbar",
        id: "navbar",
        children: [
          {
            name: "Simple with user dropdown",
            filename: "simple",
          },
          {
            name: "With action button & user dropdown",
            filename: "withAction",
          },
        ],
      },
    ],
  },
  {
    name: "Page Sections",
    id: "page-sections",
    children: [
      {
        name: "Features",
        id: "features",
        children: [
          {
            name: "Download App Links",
            filename: "downloadAppLinks",
          },
          {
            name: "Simple three column grid",
            filename: "simpleThreeColumns",
          },
          {
            name: "Grid list with heading",
            filename: "gridListWithHeading",
          },
        ],
      },
      {
        name: "Hero",
        id: "hero",
        children: [
          {
            name: "Download App Links",
            filename: "downloadAppLinks",
          },
          {
            name: "With text & CTA",
            filename: "textWithCallToAction",
          },
          {
            name: "With text, image & CTA",
            filename: "imageWithTextAndCTA",
          },
          {
            name: "With background image and gradient",
            filename: "withImage",
          },
        ],
      },
    ],
  },
  {
    name: "Forms",
    id: "forms",
    children: [],
  },
];
