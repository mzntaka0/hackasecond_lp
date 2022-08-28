import React from "react";
import { Stack, Grid } from "@mui/material";

import SkillCard from "./SkillCard";
import { skills } from "./skills";

const Component: React.FC = () => {
  return (
    <Grid container spacing={3} width="100%">
      {skills.map((value) => (
        <Grid item>
          <SkillCard {...value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
