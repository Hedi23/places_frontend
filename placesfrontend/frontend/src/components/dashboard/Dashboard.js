import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlacesCount, getLatestOrgImport, getLatestBraImport, getLatestGeoImport } from "../../actions/places";

export class Dashboard extends Component {
  static propTypes = {
    placescount: PropTypes.number.isRequired,
    latestorgimport: PropTypes.array.isRequired,
    latestbraimport: PropTypes.array.isRequired,
    latestgeoimport: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPlacesCount();
    this.props.getLatestOrgImport();
    this.props.getLatestBraImport();
    this.props.getLatestGeoImport();
  }

  render() {
    return (
      <div>
        <h3>DASHBOARD</h3>
        <br />
        <p>Anzahl Places im System: {this.props.placescount}</p>
        <div>Letzter ORG Import: {this.props.latestorgimport.map((latestimport, index) => (
              <div key={latestimport.display_name + "-" + index}>
                <p>{latestimport.display_name}, {latestimport.updated}</p>
              </div>
            ))}
        </div>
        <div>Letzter BRA Import: {this.props.latestbraimport.map((latestimport, index) => (
              <div key={latestimport.display_name + "-" + index}>
                <p>{latestimport.display_name}, {latestimport.updated}</p>
              </div>
            ))}
        </div>
        <div>Letzter GEO Import: {this.props.latestgeoimport.map((latestimport, index) => (
              <div key={latestimport.display_name + "-" + index}>
                <p>{latestimport.display_name}, {latestimport.updated}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placescount: state.places.placescount,
  latestorgimport: state.places.latestorgimport,
  latestbraimport: state.places.latestbraimport,
  latestgeoimport: state.places.latestgeoimport
});

export default connect(mapStateToProps, { getPlacesCount, getLatestOrgImport, getLatestBraImport, getLatestGeoImport})(Dashboard);
