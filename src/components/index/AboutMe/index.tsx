import React from "react";
import { Stack, Typography } from "@mui/material";

import Me from "components/common/Me";

const Component: React.FC = () => {
  return (
    <Stack spacing={3} direction="row">
      <Me width="40%" />
      <Stack
        sx={{ flex: 1 }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontWeight="bold" variant="h3">
          水野多加雄
          <Typography sx={{ textAlign: "center" }}>Takao Mizuno</Typography>
        </Typography>
        <Typography fontWeight="bold" variant="body1">
          NLP, Search and various ML
        </Typography>
        <Typography fontWeight="bold" variant="body1">
          API Development
        </Typography>
        <Typography fontWeight="bold" variant="body1">
          Frontend/Design
        </Typography>
        <Typography fontWeight="bold" variant="body1">
          Product Management
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Component;
