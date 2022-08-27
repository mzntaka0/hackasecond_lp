import React from "react";
import { Box, Stack, Button } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Logo from "components/common/Logo";

const Header: React.FC = () => {
  return (
    <Stack
      sx={{
        height: "72px",
        width: "100vw",
        p: (theme: Theme) => theme.spacing(0, 3, 0, 3),
        bgColor: "main",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      direction="column"
      spacing={3}
      justifyContent="center"
    >
      <Box>
        <Logo />
      </Box>
      <Box>
        <Button variant="text">hoge</Button>
      </Box>
    </Stack>
  );
};

export default Header;
