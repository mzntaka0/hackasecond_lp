import React from "react";
import { Box } from "@mui/material";

import { staticPath } from "utils/$path";

type Props = {
  height?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
};

const Component: React.FC<Props> = (props) => {
  const {
    width = "100%",
    height = "100%",
    minWidth = "100%",
    minHeight = "100%",
    maxWidth = "100%",
    maxHeight = "100%",
  } = props;
  return (
    <Box sx={{ width, height, minWidth, minHeight, maxWidth, maxHeight }}>
      <img
        src={staticPath.me_jpg}
        style={{
          filter: "grayscale(60%)",
          borderRadius: "51% 49% 48% 52% / 64% 51% 49% 36% ",
        }}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Component;
