import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";

const Component: React.FC = () => {
  const email = process.env.email;
  //const toast = useToast();
  //const { onCopy, hasCopied } = useClipboard(process.env.EMAIL || "");
  const contactOnClick = () => {
    //  onCopy();
    //  toast({
    //    title: "You copied info email address!!",
    //    description:
    //      "You can send an email to 'info@hackasecond.com' on any email service",
    //    status: "success",
    //    duration: 9000,
    //    isClosable: true,
    //  });
  };
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
        </Typography>
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
            href="https://biskett.me/mzntaka0/other"
            target="_blank"
            size="large"
          >
            Book a Schedule
          </Button>
          <Tooltip title='Copy "info@hackasecond.com"'>
            <Button variant="outlined" size="large" onClick={contactOnClick}>
              Contact
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Component;
