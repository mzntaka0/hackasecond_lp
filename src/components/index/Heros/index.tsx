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
    <Box px={8} py={24} mx="auto">
      <Box
      //w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
      //mx="auto"
      //textAlign={{ base: "left", md: "center" }}
      >
        <Typography
          mb={6}
          sx={{
            color: "#EDF2F7",
          }}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
        >
          Enhance the value of your{" "}
          <Typography
            sx={{
              color: "linear-gradient(90deg, #48BBB78 0%, #805AD5 100%)",
            }}
            display={{ base: "block", lg: "inline" }}
            width="100%"
            fontWeight="extrabold"
          >
            PRECIOUS TIME
          </Typography>{" "}
        </Typography>
        <Box
          sx={{
            color: "#CBD5E0",
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
      </Box>
    </Box>
  );
};

export default Component;
