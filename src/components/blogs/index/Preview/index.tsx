import React from "react";
import { Stack } from "@mui/material";

type Props = {
  onClose: () => void;
  content: string | null;
};

const Component: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Stack>hoge</Stack>
    </Stack>
  );
};

export default Component;
