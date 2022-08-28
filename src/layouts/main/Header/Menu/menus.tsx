import React from "react";

import { pagesPath } from "utils/$path";

export type MenuType = {
  title: string;
  to: string;
  icon?: React.ReactNode;
  description?: string;
  tag?: string[];
  children?: MenuType[];
};

export const menus: MenuType[] = [
  {
    title: "Home",
    to: pagesPath.$url().pathname,
  },
  {
    title: "About",
    to: pagesPath.about.$url().pathname,
  },
  {
    title: "Blog",
    to: pagesPath.blogs.$url().pathname,
  },
  {
    title: "Services",
    to: pagesPath.services.machine_learning.$url().pathname,
    children: [
      {
        title: "Machine Learning",
        to: pagesPath.services.machine_learning.$url().pathname,
      },
      {
        title: "MVP Development",
        to: pagesPath.services.mvp_development.$url().pathname,
      },
      {
        title: "API",
        to: pagesPath.services.api.$url().pathname,
      },
      {
        title: "Frontend",
        to: pagesPath.services.frontend.$url().pathname,
      },
      {
        title: "Integration",
        to: pagesPath.services.frontend.$url().pathname,
      },
      {
        title: "Consultation",
        to: pagesPath.services.consultation.$url().pathname,
      },
      {
        title: "Education",
        to: pagesPath.services.education.$url().pathname,
      },
    ],
  },
];
