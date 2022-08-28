import React from "react";
import { Box } from "@mui/material";

import { staticPath } from "utils/$path";

type Props = {
  height?: string;
  width?: string;
};

const Component: React.FC<Props> = (props) => {
  const { width = "100%", height = "100%" } = props;
  return (
    <Box sx={{ width, height }}>
      <img src={staticPath.full_logo_svg} width="100%" height="100%" />
    </Box>
  );
};

export default Component;
