import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Box,
  ListItem,
  MenuItem as MuiMenuItem,
  MenuList,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  bindHover,
  bindMenu,
  bindPopover,
  usePopupState,
} from "material-ui-popup-state/hooks";

import { MenuType } from "../menus";

const styles = {
  active: {
    color: "#01579b",
    "&:active": {
      color: "#01579b",
    },
    boxShadow: "inset 0 5px 0 #01579b",
  },
} as const;

const LinkWrapper = styled("div")({
  textDecoration: "none",
  "& > a": {
    textDecoration: "none",
  },
  "& > svg": {
    textDecoration: "none",
  },
});

type Props = MenuType;

const Component: React.FC<Props> = (props) => {
  const { title, to, icon = null, children } = props;
  const router = useRouter();
  const pathname = usePathname();
  const popupState = usePopupState({
    variant: "popover",
    popupId: `subMenu-${to}`,
  });
  return (
    <>
      <ListItem
        key={to}
        sx={{
          height: "100%",
          width: "auto",
          cursor: "pointer",
          p: 0,
          ...(pathname === to && styles.active),
          ...(children
            ? children
                .map((value) => value.to.split("?")[0])
                .includes(pathname?.split("?")[0] ?? "") && styles.active
            : null),
        }}
      >
        <LinkWrapper>
          <Link href={to} passHref>
            <Stack
              sx={{
                px: 2,
                height: "100%",
              }}
              direction="row"
              alignItems="center"
              {...bindHover(popupState)}
              spacing={1}
            >
              {icon}
              <Stack
                sx={{
                  "&:active": {
                    color: "secondary",
                  },
                  "&:hover": {
                    color: "secondary",
                  },
                }}
                direction="row"
                alignItems="center"
              >
                <Typography
                  sx={{
                    margin: 0,
                    display: "inline",
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:active": {
                      color: "secondary",
                    },
                    "&:hover": {
                      color: "secondary",
                    },
                  }}
                >
                  {title}
                </Typography>
                {children && <ArrowDropDown sx={{ color: "secondary" }} />}
              </Stack>
            </Stack>
          </Link>
        </LinkWrapper>
      </ListItem>
      {children && (
        <Box>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{
              pointerEvents: "none",
              display: "block",
            }}
          >
            <Paper
              sx={{
                minWidth: "max-content",
                pointerEvents: "auto",
                padding: 0,
                backgroundColor: "#2D3748",
              }}
            >
              <MenuList
                sx={{ backgroundColor: "#2D3748" }}
                {...bindMenu(popupState)}
              >
                {/*FIXME: modify logics*/}
                {children?.map((child) => (
                  <MuiMenuItem
                    key={`${to}${child.title}`}
                    dense
                    sx={
                      pathname === child.to
                        ? {
                            color: "secondary",
                            fontWeight: "bold",
                          }
                        : { color: "primary.main", fontWeight: "bold" }
                    }
                    component="a"
                    onClick={() => router.push(child.to)}
                  >
                    {child.title}
                  </MuiMenuItem>
                ))}
              </MenuList>
            </Paper>
          </Popover>
        </Box>
      )}
    </>
  );
};

export default Component;
