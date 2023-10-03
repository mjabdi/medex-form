import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GlobalState from './GlobalState';

import { Grid } from '@material-ui/core';

import {categories} from './ScreeningPackageLoader'

const useStyles = makeStyles((theme) => ({

  catBox: {
    textAlign: "center",
    width: "100%",
    fontSize: "0.9rem",
    fontWeight:"600",
    padding: "5px",
    border: "1px solid #eee",
    height: "120px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#333",
    background: "linear-gradient(90deg, rgba(214,214,214,1) 30%, rgba(222,222,222,1) 74%, rgba(222,222,222,1) 100%)",
    // transition : "all 0.3s ease-in",
    "&:hover" : {
      background: "linear-gradient(90deg, rgba(179,68,1,1) 30%, rgba(232,82,25,1) 74%, rgba(231,109,62,1) 100%)",
      color : "#fff",
      // transition : "all 0.1s ease-in",
    }
  },

  catBoxSelected: {
    textAlign: "center",
    width: "100%",
    fontSize: "1rem",
    fontWeight:"600",
    padding: "10px",
    border: "1px solid #eee",
    height: "120px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(90deg, rgba(179,68,1,1) 30%, rgba(232,82,25,1) 74%, rgba(231,109,62,1) 100%)",
  }


}));

export default function CategoriesForm() {
  const [state, setState] = React.useContext(GlobalState);
  const classes = useStyles();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    setState(state => ({...state, package: null}))
  }, [state.cat]);

  const catClicked = (key, text) => {
    setState(state => ({...state, cat: {key: key, text: text}, activeStep: state.activeStep + 1}))
  }

  return (
    <React.Fragment>
      <Grid container spacing={1} alignItems="center" justify="start">
        {
          categories.map(item => (
            <Grid item xs={6} sm={3}  >
              <a href={item.link} style={{textDecoration: "none"}}>
              <div style={item.small ? {height: "70px"} : {}} className={state.cat?.key === item.key ? classes.catBoxSelected  : classes.catBox} onClick={() => catClicked(item.key, item.text)}>
                <Grid container alignItems="center" justify="center" style={{height:"100%", width:"100%"}}>
                  <Grid item>
                      {item.text}
                  </Grid>
                 </Grid> 
              </div>
              </a>
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  );
}