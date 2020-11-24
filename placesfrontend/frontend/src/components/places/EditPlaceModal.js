import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { editPlace } from "../../actions/place";

class EditPlaceModal extends Component {
  state = {
    additional_address1: "",
    additional_address2: "",
    branch_number: "",
    branch_short_name: this.props.branch_short_name,
    building: "",
    city: "Test",
    end_date: "",
    country_code: "",
    display_name: "",
    house_number: "",
    import_file_number: "",
    contributor: "Places_Frontend Value",
    latitude: "",
    longitude: "",
    province: "",
    region: "",
    remarks: "",
    street: "Test",
    zip_code: "Test",
  };
  redirectState = {
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
          to={`/partners/${this.props.partner_short_name}/${this.props.branch_short_name}`}
        />
      );
    }
  };
  render() {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Place
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
                this.props.editPlace(this.props.branch_short_name, this.state);
                this.setRedirect();
              }}
            >
              Add
            </button>
            {this.renderRedirect()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  editPlace,
})(EditPlaceModal);
