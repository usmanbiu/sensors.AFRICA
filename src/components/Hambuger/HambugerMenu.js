import { Grid, MenuItem, Typography, MenuList, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { URLS } from "@/sensorsafrica/components/DocumentHead/PageHeads";
import MenuButton from "@/sensorsafrica/components/Hambuger/MenuButton";
import Link from "@/sensorsafrica/components/Link";

const useStyles = makeStyles((theme) => ({
  grid: {
    flex: 1,
  },
  menuList: {
    color: "white",
    marginTop: "5rem !important", // Override the default marginTop:'2rem' of <MenuList /> Component
    textAlign: "right",
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
      paddingRight: "10%",
    },
  },
  menuListItem: {
    color: "white",
    display: "block",
  },
  modalContent: {
    margin: "auto",
    padding: "20px",
    height: "auto",
  },
  typography: {
    color: "#fff",
    textAlign: "right",
    fontWeight: "700",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function HambugerMenu({ handleToggle, menuOpen, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <MenuButton
          open={menuOpen}
          onClick={handleToggle}
          onClose={handleToggle}
        />
      </Grid>
      <Grid item xs={12}>
        <Modal
          BackdropProps={{
            style: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
          className={classes.modalContent}
          open={menuOpen}
          onClose={handleToggle}
          disableAutoFocus
        >
          <MenuList className={classes.menuList}>
            <Link href={URLS.AIR.ABOUT} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  ABOUT
                </Typography>
              </MenuItem>
            </Link>

            <Link href={URLS.AIR.JOIN} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  CONTACT
                </Typography>
              </MenuItem>
            </Link>

            <Link href={URLS.AIR.DATA} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  DATA
                </Typography>
              </MenuItem>
            </Link>

            <Link href={URLS.AIR.HOW_SENSORS_WORK} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  HARDWARE
                </Typography>
              </MenuItem>
            </Link>

            <Link href={URLS.AIR.JOIN} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  JOIN
                </Typography>
              </MenuItem>
            </Link>

            <Link
              href={URLS.AIR.MONTHLY_REPORT}
              className={classes.link}
              target="__blank"
              rel="noopener noreferrer"
            >
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  MONTHLY AIR REPORTS
                </Typography>
              </MenuItem>
            </Link>

            <Link href={URLS.AIR.IMPACT} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  RESOURCES
                </Typography>
              </MenuItem>
            </Link>

            <a
              href="https://medium.com/@sensors.AFRICA"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  STORIES
                </Typography>
              </MenuItem>
            </a>
          </MenuList>
        </Modal>
      </Grid>
    </Grid>
  );
}

HambugerMenu.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default HambugerMenu;
