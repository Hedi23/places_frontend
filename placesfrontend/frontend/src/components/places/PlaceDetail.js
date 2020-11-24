import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditPlaceModal from "./EditPlaceModal";
import DeletePlaceModal from "./DeletePlaceModal";

import {
  getPlace,
  getPlaceFromOrg,
  getPlaceFromBra,
  getPlaceFromGeo,
} from "../../actions/place";

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

  onSubmit = (formValues) => {
    this.props.addPlace(formValues);
  };

  render() {
    return (
      <Fragment>
        <h3>Place Ansicht</h3>
        <p>Place ID: {this.props.match.params.branch_short_name}</p>
        <p>Partner ID: {this.props.match.params.partner_short_name}</p>
        <div className="right floated content">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#deletePlaceModal"
          >
            Delete
          </button>
        </div>
        <div className="right floated content">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#addPlaceModal"
          >
            Add
          </button>
        </div>
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
          </tbody>
        </table>
        <div
          className="modal fade"
          id="deletePlaceModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <DeletePlaceModal
            branch_short_name={this.props.match.params.branch_short_name}
            partner_short_name={this.props.place.city}
          />
        </div>
        <div
          className="modal fade"
          id="addPlaceModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <EditPlaceModal
            branch_short_name={this.props.match.params.branch_short_name}
            partner_short_name={this.props.match.params.partner_short_name}
          />
        </div>
      </Fragment>
    );
  }
}
const validate = (formValues) => {
  const errors = {};

  if (!formValues.task) {
    errors.task = "Please enter at least 1 character";
  }

  return errors;
};
const mapStateToProps = (state) => ({
  place: state.place.place,
  placefromorg: state.place.placefromorg,
  placefrombra: state.place.placefrombra,
  placefromgeo: state.place.placefromgeo,
});

export default connect(mapStateToProps, {
  getPlace,
  getPlaceFromOrg,
  getPlaceFromBra,
  getPlaceFromGeo,
})(PlaceDetail);
