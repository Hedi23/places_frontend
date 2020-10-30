import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import PropTypes from "prop-types";
import { getPlace, deletePlace } from "../../actions/place";

export class PlaceDelete extends Component {
  static propTypes = {
    place: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const branch_short_name = this.props.match.params.branch_short_name;
    this.props.getPlace(branch_short_name);
  }

  renderContent() {
    if (!this.props.place) {
      return "Are you sure you want to delete this place?";
    }
    return `Are you sure you want to delete the task: ${this.props.match.params.branch_short_name}`;
  }

  renderActions() {
    const { id } = this.props.match.params.branch_short_name;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deletePlace(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to={"/places/" + id} className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Place"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  place: state.place.place,
});

export default connect(mapStateToProps, { getPlace, deletePlace })(PlaceDelete);
