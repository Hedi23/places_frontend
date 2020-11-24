import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPlaces } from "../../actions/places";
import Search from "../Search";

export class PlacesList extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPlaces();
  }
  state = {
    filter: "",
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  render() {
    return (
      <Fragment>
        <h3>Places List</h3>
        <Search value={this.props.filter} onChange={this.handleChange} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Place ID</th>
              <th>Partner ID</th>
              <th>Branch ID</th>
              <th>Street</th>
              <th>PLZ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.places
              .filter((place) =>
                this.state.filter
                  ? place.branch_short_name
                      .toLowerCase()
                      .includes(this.state.filter.toLowerCase())
                  : place.branch_short_name
              )
              .map((place, index) => (
                <tr key={place.branch_short_name + "-" + index}>
                  <td>
                    <Link
                      to={`/places/${place.partner_short_name}/${place.branch_short_name}`}
                    >
                      {place.branch_short_name}
                    </Link>
                  </td>
                  <td>{place.partner_short_name}</td>
                  <td>{place.branch_number}</td>
                  <td>{place.street}</td>
                  <td>{place.zip_code}</td>
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
