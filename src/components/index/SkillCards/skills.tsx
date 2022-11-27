import React from "react";
import { Typography } from "@mui/material";

export type Skill = {
  title: string;
  rank: number;
  description: string | string[];
  tools?: string[];
};

export const languages: Skill[] = [
  {
    title: "Python",
    rank: 5,
    description: ["* Machine Learning", "* API Development", "* Utilities"],
  },
  {
    title: "TypeScript",
    rank: 5,
    description: "really good",
  },
  {
    title: "Rust",
    rank: 3,
    description: "really good",
  },
  {
    title: "SQL",
    rank: 5,
    description: "really good",
  },
];

export const tools: Skill[] = [
  {
    title: "Python",
    rank: 5,
    description: "really good",
  },
  {
    title: "TypeScript",
    rank: 5,
    description: "really good",
  },
  {
    title: "Rust",
    rank: 3,
    description: "really good",
  },
  {
    title: "SQL",
    rank: 5,
    description: "really good",
  },
];
