import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/homepage/index";
import Details from "./Pages/detailspage/index";
import theme from "./styles/theme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detailspage" component={Details} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
