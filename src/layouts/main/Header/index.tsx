import React from "react";
import Link from "next/link";
import { Box, Stack, Button } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Logo from "components/common/Logo";
import { pagesPath } from "utils/$path";
import Menu from "./Menu";

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
      direction="row"
      spacing={3}
      alignItems="center"
    >
      <Link href={pagesPath.$url()} passHref>
        <Box sx={{ cursor: "pointer" }} component="a">
          <Logo height="40px" />
        </Box>
      </Link>
      <Menu />
    </Stack>
  );
};

export default Header;
