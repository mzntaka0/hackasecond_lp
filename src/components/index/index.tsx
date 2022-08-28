import React from "react";
import { Stack } from "@mui/material";

import KnowledgeGraph from "./KnowledgeGraph";
import Heros from "./Heros";
import AboutMe from "./AboutMe";
import SkillCards from "./SkillCards";

const Content: React.FC = () => {
  return (
    <Stack
      sx={{
        boxSizing: "border-box",
        height: "fit-content",
      }}
      spacing={8}
    >
      <Heros />
      <AboutMe />
      <SkillCards />
      <KnowledgeGraph />
    </Stack>
  );
};

export default Content;
