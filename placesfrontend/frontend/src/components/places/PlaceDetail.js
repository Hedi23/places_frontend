import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import {
  getPlace,
  deletePlace,
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
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={`/partners/${this.props.match.params.partner_short_name}`}
        />
      );
    }
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
            data-target="#modaldelete"
          >
            delete
          </button>
        </div>
        <div className="right floated content">
          {" "}
          <Link
            to={`/update/${this.props.match.params.branch_short_name}`}
            className="small ui negative basic button"
          >
            Add
          </Link>
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
          id="modaldelete"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete Place
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Delete place with id:{" "}
                {this.props.match.params.branch_short_name}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    this.props.deletePlace(
                      this.props.match.params.branch_short_name
                    );
                    this.setRedirect();
                  }}
                >
                  Delete
                </button>
                {this.renderRedirect()}
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, {
  getPlace,
  deletePlace,
  getPlaceFromOrg,
  getPlaceFromBra,
  getPlaceFromGeo,
})(PlaceDetail);
