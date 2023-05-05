"use client";

import React from "react";
import { Stack } from "@mui/material";
import Headroom from "react-headroom";

import Header from "./Header";
import Providers from "./Providers";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const headerHeight = "72px";
  return (
    <>
      <Providers>
        <Headroom>
          <Header height={headerHeight} />
        </Headroom>
        <Stack
          width="100%"
          height="100%"
          sx={{
            p: 3,
            height: `calc(100vh - ${headerHeight}) * 2`,
          }}
          spacing={4}
        >
          {children}
        </Stack>
      </Providers>
    </>
  );
};

export default Layout;
