import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import SkillCard from "./SkillCard";
import { languages, tools } from "./skills";

const Component: React.FC = () => {
  return (
    <Stack width="100%" height="fit-content" spacing={3}>
      <Typography variant="h5">Languages</Typography>
      <Grid container spacing={3} width="100%">
        {languages.map((value) => (
          <Grid key={value.title} item>
            <SkillCard {...value} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5">Tools</Typography>
      <Grid container spacing={3} width="100%">
        {tools.map((value) => (
          <Grid key={value.title} item>
            <SkillCard {...value} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Component;
