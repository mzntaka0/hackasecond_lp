import React from "react";
import { Box } from "@mui/material";
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
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
