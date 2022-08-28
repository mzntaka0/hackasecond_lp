import React from "react";
import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};

export default Layout;
