import React from "react";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";

import { Layouts } from "types/layouts";

type Props = {
  children: React.ReactNode;
  name: Layouts;
};

const Layout: React.FC<Props> = (props) => {
  const { children, name } = props;
  const Layout = dynamic<{ children: React.ReactNode }>(
    () => import(`./${name}`)
  );
  return (
    <Stack
      width="100vw"
      height="100%"
      sx={{
        backgroundImage: "linear-gradient(to left, #001b24, #1b3a4a)",
      }}
    >
      <Layout>{children}</Layout>
    </Stack>
  );
};

export default Layout;
