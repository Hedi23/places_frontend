import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./dashboard/Dashboard";
import Partners from "./partners/PartnersList";
import Places from "./places/PlacesList";
import PartnerDetail from "./partners/PartnerDetail";
import PlaceDetail from "./places/PlaceDetail";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/partners" component={Partners} />
                <Route exact path="/places" component={Places} />
                <Route
                  exact
                  path="/partners/:partner_short_name"
                  component={PartnerDetail}
                />
                <Route
                  exact
                  path="/places/:partner_short_name/:branch_short_name"
                  component={PlaceDetail}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
