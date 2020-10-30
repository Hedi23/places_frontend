import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./layout/Header";
import Dashboard from "./dashboard/Dashboard";
import Partners from "./partners/PartnersList";
import Places from "./places/PlacesList";
import PartnerDetail from "./partners/PartnerDetail";
import PlaceDetail from "./places/PlaceDetail";
import PlaceDelete from "./places/PlaceDelete";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
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
                path="/places/:branch_short_name/:contributor"
                component={PlaceDetail}
              />
              <Route
                exact
                path="/delete/:branch_short_name"
                component={PlaceDelete}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
