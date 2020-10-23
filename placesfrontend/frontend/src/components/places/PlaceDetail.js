import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPlace } from "../../actions/place";
import { getPlaceFromOrg, getPlaceFromBra, getPlaceFromGeo } from "../../actions/place";

export class PlaceDetail extends Component {
  static propTypes = {
    place: PropTypes.array.isRequired,
    placefromorg: PropTypes.array.isRequired,
    placefrombra: PropTypes.array.isRequired,
    placefromgeo: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const branch_short_name = this.props.match.params.branch_short_name;
    this.props.getPlace(branch_short_name);
    this.props.getPlaceFromOrg(branch_short_name);
    this.props.getPlaceFromBra(branch_short_name);
    this.props.getPlaceFromGeo(branch_short_name);
  }


  render() {
    return (
      <Fragment>
        <h3>Place Ansicht</h3>
        <p>
             Place ID: {this.props.match.params.branch_short_name}
            </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Key</th>
              <th>Street</th>
              <th>City</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {this.props.placefromorg.map((place, index) => (
              <tr key={place.branch_short_name + "-" + index}>
                <td>ORG Value</td>
                <td>{place.street}</td>
                <td>{place.city}</td>
                <td>{place.zip_code}</td>
              </tr>
            ))}
            {this.props.placefrombra.map((place, index) => (
              <tr key={place.branch_short_name + "-" + index}>
                <td>Bra Value</td>
                <td>{place.street}</td>
                <td>{place.city}</td>
                <td>{place.zip_code}</td>
              </tr>
            ))}
            {this.props.placefromgeo.map((place, index) => (
              <tr key={place.branch_short_name + "-" + index}>
                <td>Google Geo Value</td>
                <td>{place.street}</td>
                <td>{place.city}</td>
                <td>{place.zip_code}</td>
              </tr>
            ))}
              <tr>
                <td></td>
                <td>
                  <Link
                    to={""}
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <Link
                    to={""}
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <Link
                    to={""}
                  >
                    Update
                  </Link>
                </td>
              </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  place: state.place.place,
  placefromorg: state.place.placefromorg,
  placefrombra: state.place.placefrombra,
  placefromgeo: state.place.placefromgeo,
});

export default connect(mapStateToProps, { getPlace, getPlaceFromOrg, getPlaceFromBra, getPlaceFromGeo })(PlaceDetail);