import React from "react";
import { Stack } from "@mui/material";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const Content: React.FC = () => {
  return (
    <Stack width="100%" height="100%">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </Stack>
  );
};

export default Content;
