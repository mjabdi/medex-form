import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import GlobalState from "./GlobalState";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import HttpsIcon from "@material-ui/icons/Https";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import { Grid } from "@material-ui/core";

import logoImage from "./images/logo.png";
import doctorImage from "./images/doctor.png";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import faq from "./FAQ";
import SmartEntryForm from "./SmartEntryForm";
import CategoriesFormWalkin from "./CategoriesFormWalkin";
import CategoriesFormAppointment from "./CategoriesFormAppointment";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="#">
        <strong> Medical Express Clinic </strong>
      </Link>
      {isMobile ? " " : " All rights reserved."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#f68529",
    color: "#fff",
    alignItems: "center",
  },

  logo: {
    maxWidth: 160,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

  bold: {
    fontWeight: "800",
    padding: "5px",
  },

  doneImage: {
    width: "240px",
    height: "150px",
    margin: "20px",
  },

  logoImage: {
    width: "40px",
    height: "40px",
    marginLeft: "0px",
  },

  doctorImage: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },

  privacyButton: {
    marginBottom: "20px",
    width: "115px",
  },

  faqButton: {
    marginBottom: "20px",
    marginLeft: "10px",
    // backgroundColor : "#2f942e",
    // "&:hover": {
    //   background: "green",
    //   color: "#fff"
    // },
    textDecoration: "none !important",
    width: "115px",
  },

  textContent: {
    color: "#666f77",
    fontSize: "1.1rem",
    textAlign: "left",
    paddingLeft: "30px",
    paddingRight: "30px",
    lineHeight: "2.2em",
    fontWeight: "400",
  },

  textContentMobile: {
    color: "#666f77",
    fontSize: "0.9rem",
    textAlign: "left",
    paddingLeft: "30px",
    paddingRight: "30px",
    lineHeight: "2.2em",
    fontWeight: "400",
  },

  getStartedButton: {
    marginTop: "10px",
    marginBottom: "10px",
  },

  AirIcon: {
    marginRight: "10px",
    fontSize: "32px",
  },

  pageTitle: {
    color: theme.palette.primary.main,
    marginTop: "10px",
  },

  Treatment: {
    paddingTop: "20px",
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#555",
  },

  BookNow: {
    paddingBottom: "10px",
    paddingTop: "0px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#ed5f00",
  },

  BookNowAfter: {
    paddingTop: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#9e3302",
  },

  ByAppointment: {
    paddingBottom: "10px",
    paddingTop: "0px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#ed5f00",
  },
}));

export default function WelcomeForm() {
  const [state, setState] = React.useContext(GlobalState);
  const classes = useStyles();

  //// ** Dialog

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const [openFAQ, setOpenFAQ] = React.useState(false);
  const [scrollFAQ, setScrollFAQ] = React.useState("paper");

  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const descriptionElementRefFAQ = React.useRef(null);
  React.useEffect(() => {
    if (openFAQ) {
      const { current: descriptionElementFAQ } = descriptionElementRefFAQ;
      if (descriptionElementFAQ !== null) {
        descriptionElementFAQ.focus();
      }
    }
  }, [openFAQ]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClickOpenFAQ = (scrollType) => () => {
    setOpenFAQ(true);
    setScrollFAQ(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseFAQ = () => {
    setOpenFAQ(false);
  };

  const getStartedClicked = (event) => {
    setState((state) => ({ ...state, getStarted: true }));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            spacing={1}
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                style={{ fontWeight: "500" }}
                variant="h5"
                color="inherit"
                noWrap
              >
                Book Appointment Online
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.Treatment}>Medical Express Clinic Treatments</div>

      {/* <div className={classes.BookNowAfter}>Private consultation, sexual health, self request, weight loss</div> */}

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <div className={classes.BookNow}>Book now or Walk in</div>

          <CategoriesFormWalkin />
        </Paper>

        <Paper className={classes.paper}>
          <div className={classes.ByAppointment}>
            By appointment only
          </div>

          <CategoriesFormAppointment />
        </Paper>

        <Copyright />
      </main>
    </React.Fragment>
  );
}
