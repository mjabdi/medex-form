import './App.css';
import GlobalState from './GlobalState'; 
import React, { useEffect } from 'react';
import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import CategoriesForm from './CategoriesForm';
import WelcomeForm from './WelcomeForm';



function App() {
  const [state, setState] = React.useState({activeStep : 0});


  return (
    <GlobalState.Provider value={[state, setState]}>
            <MuiThemeProvider theme={theme}>
        <CssBaseline />

      <div className="App">

       {/* {state.urlRead && <WelcomeForm />}   */}
       <WelcomeForm/>
       
      </div>
      </MuiThemeProvider>
    </GlobalState.Provider>
  );
}

export default App;
