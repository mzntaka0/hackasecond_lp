import React from "react";
import { Stack, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import type { Skill } from "../skills";

type Props = Skill;

const Component: React.FC<Props> = (props) => {
  const { title, rank = 0, description } = props;

  const assessment: { [key: number]: string } = {
    0: "",
    1: "Not bad",
    2: "Average",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };
  return (
    <Stack
      sx={{
        p: 3,
        width: "280px",
        height: "320px",
        background: "rgba(255, 255, 255, 0.13)",
        borderRadius: "8px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(6.8px)",
        WebkitBackdropFilter: "blur(6.8px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
      }}
      spacing={3}
    >
      <Stack spacing={1}>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Rating
            sx={{
              opacity: 0.6,
            }}
            readOnly
            size="small"
            value={Math.min(Math.max(rank, 0), 5)}
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.6)" }}
          >
            {assessment[Math.floor(rank)]}
          </Typography>
        </Stack>
      </Stack>
      {typeof description === "string" ? (
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
          }}
          variant="body1"
        >
          {description}
        </Typography>
      ) : (
        <Stack>
          {description.map((value) => (
            <Typography
              key={value}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
              }}
              variant="body1"
            >
              {value}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Component;
