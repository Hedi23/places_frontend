import React, { Component } from "react";
import PropTypes from "prop-types";
import { getAnzahlPlaces } from "../../actions/places";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>DASHBOARD</h3>
        <br />
        <p>Anzahl Places im System: </p>
        <p>Letzter ORG Import: </p>
        <p>Letzter BRA Import: </p>
        <p>Letzter PAU Durchlauf: </p>
        <p>Letzter GEOCODING Durchlauf: </p>
      </div>
    );
  }
}

export default Dashboard;
