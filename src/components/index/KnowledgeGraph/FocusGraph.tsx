// import dynamic from "next/dynamic";
import React from "react";
import ForceGraph3D, {
  ForceGraphMethods,
  NodeObject,
} from "react-force-graph-3d";
import { Object3D } from "three";
import SpriteText from "three-spritetext";
import { useWindowSize } from "@react-hook/window-size";

import data from "./textData";

const FocusGraph = () => {
  const fgRef = React.useRef<ForceGraphMethods>();
  const [width, height] = useWindowSize();

  const handleClick = React.useCallback(
    (node: any) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (fgRef.current) {
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          3000
        );
      }
    },
    [fgRef]
  );

  return (
    <ForceGraph3D
      width={width - 48}
      height={height - 72 - 48}
      ref={fgRef}
      graphData={data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      nodeRelSize={0}
      onNodeClick={handleClick}
      backgroundColor="rgba(0, 0, 0, 0.05)"
      nodeThreeObjectExtend={true}
      nodeThreeObject={(node: NodeObject) => {
        const { id } = node;
        const text = typeof id === "string" ? id : id?.toString();
        const sprite = new SpriteText(text);
        sprite.color = "#8898aa";
        sprite.textHeight = 12;
        return sprite;
      }}
    />
  );
};

export default FocusGraph;
