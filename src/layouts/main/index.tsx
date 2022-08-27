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
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Stack
        sx={{
          p: 3,
        }}
        spacing={4}
      >
        {children}
      </Stack>
    </>
  );
};

export default Layout;
