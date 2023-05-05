import dynamic from "next/dynamic";
import { Typography, Stack } from "@mui/material";

const Component: React.FC = () => {
  const FocusGraph = dynamic(() => import("./FocusGraph"), {
    ssr: false,
  });

  return (
    <Stack sx={{ color: "white" }} spacing={3}>
      <Typography sx={{ fontWeight: "bold" }} variant="h4">
        It's Me!
      </Typography>
      <FocusGraph />
    </Stack>
  );
};

export default Component;
