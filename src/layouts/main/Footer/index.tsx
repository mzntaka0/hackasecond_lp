import React from "react";
import { useRouter } from "next/router";
import { Button, Typography, Stack } from "@mui/material";

import Logo from "components/common/Logo";
import styles from "styles/Home.module.css"; // TODO: replace this style w/ footer module style

type Props = {
  yearFrom?: number;
};

const Section: React.FC<Props> = ({ yearFrom = new Date().getFullYear() }) => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const isCorrect: boolean = currentYear > yearFrom;
  return (
    <footer className={styles.footer}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack width="50px">
          <Logo />
          <Typography>
            &copy;{isCorrect ? `${yearFrom} - ` : null}
            {currentYear},&nbsp; "Hack a second" powered by Takao
            Mizuno(@mzntaka0)
          </Typography>
          <Button
            variant="outlined"
            onClick={() => router.push("https://github.com/mzntaka0")}
          >
            Github
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push("https://www.linkedin.com/in/mzntaka0/")}
          >
            Linkedin
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push("https://twitter.com/mzntaka0")}
          >
            Twitter
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push("https://www.instagram.com/mzntaka0/")}
          >
            Instagram
          </Button>
        </Stack>
      </div>
    </footer>
  );
};

export default Section;
