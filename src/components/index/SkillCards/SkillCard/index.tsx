import React from "react";
import { Stack, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import type { Skill } from "../skills";

type Props = Skill;

const Component: React.FC<Props> = (props) => {
  const { title, rank = 0, description } = props;
  return (
    <Stack
      sx={{
        p: 3,
        width: "280px",
        height: "350px",
        background: "rgba(255, 255, 255, 0.13)",
        borderRadius: "8px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(6.8px)",
        "-webkit-backdrop-filter": "blur(6.8px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
      }}
      spacing={3}
    >
      <Stack spacing={1}>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <Rating
          sx={{
            opacity: 0.6,
          }}
          readOnly
          size="small"
          value={rank}
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Stack>
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
        }}
        variant="body1"
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default Component;
