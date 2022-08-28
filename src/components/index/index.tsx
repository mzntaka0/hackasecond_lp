import React from "react";
import { Stack } from "@mui/material";

import KnowledgeGraph from "./KnowledgeGraph";
import Heros from "./Heros";

const Content: React.FC = () => {
  return (
    <Stack>
      <Heros />
      <KnowledgeGraph />
    </Stack>
  );
};

export default Content;
