import React from "react";
import Link from "next/link";
import { Box, Stack, Button } from "@mui/material";

import ProfileImage from "./ProfileImage";
import Profiles from "./Profiles";

const Content: React.FC = () => {
  return (
    <main>
      This page is gonna host an about page. <br />
      Plase coming soon..
      <Stack spacing="24px">
        <Box>
          <ProfileImage />
          <br />
          <img src="/bookshelf.jpg" width="300px" alt="" />
          <br />
          <img src="/mypcparts.jpg" width="300px" alt="" />
          <br />
          <img src="/mypc.jpg" width="300px" alt="" />
          <br />
          <img src="/desk.jpg" width="300px" alt="" />
        </Box>
        <Box>
          <Profiles />
        </Box>
      </Stack>
      <br />
      <Stack>
        <Button>
          <Link href="/ja_takao_mizuno_resume.xlsx">Resume(ja)</Link>
        </Button>
        <Button>
          <Link href="/en_takao_mizuno_resume.pdf">Resume(en)</Link>
        </Button>
      </Stack>
    </main>
  );
};

export default Content;
