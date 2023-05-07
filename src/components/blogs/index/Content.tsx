import React from "react";
import { Stack } from "@mui/material";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Connection,
  MiniMap,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import useModal from "lib/hooks/useModal";
import Preview from "./Preview";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Python" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Rust" } },
  { id: "3", position: { x: 100, y: 0 }, data: { label: "3" } },
  { id: "4", position: { x: 0, y: 200 }, data: { label: "4" } },
  { id: "5", position: { x: 200, y: 0 }, data: { label: "5" } },
  { id: "6", position: { x: 0, y: 300 }, data: { label: "6" } },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e2-3", source: "2", target: "3" },
];

const Content: React.FC = () => {
  const { open, close, Modal } = useModal();
  const [selectedNode, setSelectedNode] = React.useState<Node | undefined>();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = React.useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDoubleClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    open();
  };
  return (
    <>
      <Stack
        sx={{ background: "rgba(0, 0, 0, 0.25)" }}
        width="calc(100vw - 48px)"
        height="calc(100vh - 120px)"
      >
        <Controls />
        <MiniMap />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={onNodeDoubleClick}
          fitView
        />
      </Stack>
      <Modal title={selectedNode?.data.label} width="80%">
        <Preview onClose={close} content={""} />
      </Modal>
    </>
  );
};

export default Content;
