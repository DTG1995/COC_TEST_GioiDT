import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "../shared/layout/header";
import { SliderMenu } from "../shared/layout/slider-menu";

import '../styles/app.less';
import AppRouter from "./routes";

class App extends Component {
  state = {
    itemMenu: {}
  }
  render() {
    const onChangeMenu = (item) => {
      this.setState({
        ...this.state,
        itemMenu: item
      });
    }
    return (
      <Router basename="/">

        <div className="app-layout">
          <AppHeader />
          <div className="app-body">
            <SliderMenu onChange={onChangeMenu}/>
            <div className="app-content">
              <AppRouter/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;