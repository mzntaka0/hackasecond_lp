import React from "react";
import { useRouter } from "next/router";
import { Stack, Typography, IconButton, Button, Tooltip } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import Me from "components/common/Me";

const Component: React.FC = () => {
  const router = useRouter();
  return (
    <Stack spacing={3} direction="row">
      <Me width="40%" />
      <Stack
        sx={{ flex: 1 }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Typography fontWeight="bold" variant="h3">
            水野多加雄
            <Typography sx={{ textAlign: "center" }}>
              Takao Mizuno(@mzntaka0)
            </Typography>
          </Typography>
          <Typography fontWeight="bold" variant="body1">
            NLP, Search and various ML
          </Typography>
          <Typography fontWeight="bold" variant="body1">
            API Development
          </Typography>
          <Typography fontWeight="bold" variant="body1">
            Frontend/Design
          </Typography>
          <Typography fontWeight="bold" variant="body1">
            Product Management
          </Typography>
          <Stack>
            <Tooltip title="Comming Soon..">
              <Button
                sx={{
                  textDecoration: "underline dotted",
                  "&:hover": {
                    textDecoration: "underline dotted",
                  },
                }}
                size="small"
                variant="text"
              >
                Read more...
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            target="_blank"
            onClick={() => router.push("https://github.com/mzntaka0")}
          >
            <GitHubIcon sx={{ color: "text.primary", fontSize: "30px" }} />
          </IconButton>
          <IconButton
            component="a"
            target="_blank"
            onClick={() => router.push("https://www.linkedin.com/in/mzntaka0/")}
          >
            <LinkedInIcon sx={{ color: "text.primary", fontSize: "30px" }} />
          </IconButton>
          <IconButton
            component="a"
            target="_blank"
            onClick={() => router.push("https://twitter.com/mzntaka0")}
          >
            <TwitterIcon sx={{ color: "text.primary", fontSize: "30px" }} />
          </IconButton>
          <IconButton
            component="a"
            target="_blank"
            onClick={() => router.push("https://www.instagram.com/mzntaka0/")}
          >
            <InstagramIcon sx={{ color: "text.primary", fontSize: "30px" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Component;
