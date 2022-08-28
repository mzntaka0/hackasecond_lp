// import dynamic from "next/dynamic";
import React from "react";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";
import { useWindowSize } from "@react-hook/window-size";

import data from "./data";

const FocusGraph = () => {
  const fgRef = React.useRef<ForceGraphMethods>();
  const [width, height] = useWindowSize();

  const handleClick = React.useCallback(
    (node: any) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (fgRef.current) {
        console.log(fgRef.current);
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
      onNodeClick={handleClick}
    />
  );
};

export default FocusGraph;
