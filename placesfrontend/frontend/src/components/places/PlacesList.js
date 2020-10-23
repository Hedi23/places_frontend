import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPlaces } from "../../actions/places";

export class PlacesList extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPlaces();
  }
  render() {
    return (
      <Fragment>
        <h3>Places List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Place ID</th>
              <th>Partner ID</th>
              <th>Branch ID</th>
              <th>Street</th>
              <th>PLZ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.places.map((place, index) => (
              <tr key={place.branch_short_name + "-" + index}>
                <td>{place.branch_short_name}</td>
                <td>{place.partner_short_name}</td>
                <td>{place.branch_number}</td>
                <td>{place.street}</td>
                <td>{place.zip_code}</td>
                <td>
                  <Link
                    to={"/places/" + place.branch_short_name}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places.places,
});

export default connect(mapStateToProps, { getPlaces })(PlacesList);
