import React from "react";
import Link from "next/link";
import { Stack } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Logo from "components/common/Logo";
//import { pagesPath } from "lib/$path";
import Menu from "./Menu";

type Props = {
  height: string;
};

const Header: React.FC<Props> = (props) => {
  const { height } = props;
  return (
    <Stack
      sx={{
        height,
        width: "100vw",
        p: (theme: Theme) => theme.spacing(0, 3, 0, 3),
        backgroundColor: "main",
        backdropFilter: "blur(5.8px)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      direction="row"
      spacing={3}
      alignItems="center"
    >
      <Link href="/" passHref>
        <Stack height="100%" justifyContent="center" sx={{ cursor: "pointer" }}>
          <Logo width="95px" />
        </Stack>
      </Link>
      <Menu />
    </Stack>
  );
};

export default Header;
