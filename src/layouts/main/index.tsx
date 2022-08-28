import React from "react";
import { Stack } from "@mui/material";
import Headroom from "react-headroom";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const headerHeight = "72px";
  return (
    <>
      <Headroom>
        <Header height={headerHeight} />
      </Headroom>
      <Stack
        sx={{
          p: 3,
          height: `calc(100vh - ${headerHeight}) * 2`,
        }}
        spacing={4}
      >
        {children}
      </Stack>
    </>
  );
};

export default Layout;
