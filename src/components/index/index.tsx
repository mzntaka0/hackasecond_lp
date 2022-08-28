import React from "react";
import { Stack } from "@mui/material";

import KnowledgeGraph from "./KnowledgeGraph";
import Heros from "./Heros";
import AboutMe from "./AboutMe";

const Content: React.FC = () => {
  return (
    <Stack spacing={8}>
      <Heros />
      <AboutMe />
      <KnowledgeGraph />
    </Stack>
  );
};

export default Content;
