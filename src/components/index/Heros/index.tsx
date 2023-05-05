import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import ContactButton from "./ContactButton";

const Component: React.FC = () => {
  return (
    <Box px={8} pt={24} pb={16} mx="auto">
      <Stack alignItems="center" spacing={3}>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 0,
            lineHeight: 1,
            fontSize: "3.75rem",
            letterSpacing: "-0.025em",
            fontFeatureSettings: "kern",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          }}
          mb={6}
          color="text.main"
          fontWeight="800"
        >
          Enhance the value of your{" "}
        </Typography>
        <Typography
          sx={{
            margin: 0,
            lineHeight: 1,
            fontSize: "3.75rem",
            letterSpacing: "-0.025em",
            backgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #48BB78 0%, #805AD5 100%)",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          }}
          fontWeight="800"
        >
          PRECIOUS TIME
        </Typography>{" "}
        <Box
          sx={{
            color: "#CBD5E0",
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          }}
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
        >
          by using "Information Technology" whatever you want.
        </Box>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            variant="contained"
            href="https://app.spirinc.com/patterns/availability-sharing/501751d4-a346-41e2-b76d-1df05fb4eb45/confirm"
            target="_blank"
            size="large"
          >
            Book a Schedule
          </Button>
          {/*<ContactButton />*/}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Component;
