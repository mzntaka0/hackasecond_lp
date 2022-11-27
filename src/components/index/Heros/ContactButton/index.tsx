import React from "react";
import { Button, Tooltip } from "@mui/material";
import CopyToClipBoard from "react-copy-to-clipboard";
import { useSnackbar } from "notistack";

const Component: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const contactOnClick = () => {
    enqueueSnackbar('Copied "info@hackasecond.com"', {
      variant: "info",
    });
  };
  return (
    <>
      {() => (
        <Tooltip title='Copy "info@hackasecond.com"'>
          <CopyToClipBoard text={process.env.EMAIL ?? ""}>
            <Button variant="outlined" size="large" onClick={contactOnClick}>
              Contact
            </Button>
          </CopyToClipBoard>
        </Tooltip>
      )}
    </>
  );
};

export default Component;
