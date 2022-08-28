import React from "react";
import { List, Stack } from "@mui/material";

import { menus } from "./menus";
import MenuItem from "./MenuItem";

const Component: React.FC = () => {
  return (
    <List sx={{ p: 0, height: "100%" }}>
      <Stack direction="row" alignItems="center" height="100%" spacing={1}>
        {menus.map((value, index) => {
          return <MenuItem key={index} {...value} />;
        })}
      </Stack>
    </List>
  );
};

export default Component;
