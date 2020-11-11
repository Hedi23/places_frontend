import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPartner } from "../../actions/partner";

export class PartnerDetail extends Component {
  static propTypes = {
    partner: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const partner_short_name = this.props.match.params.partner_short_name;
    this.props.getPartner(partner_short_name);
  }

  render() {
    return (
      <Fragment>
        <h3>Partner Ansicht</h3>
        <p>{this.props.match.params.partner_short_name}</p>
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
            {this.props.partner.map((partnerplace, index) => (
              <tr key={partnerplace.branch_short_name + "-" + index}>
                <td>
                  <Link
                    to={`/places/${partnerplace.partner_short_name}/${partnerplace.branch_short_name}`}
                  >
                    {partnerplace.branch_short_name}
                  </Link>
                </td>
                <td>{partnerplace.partner_short_name}</td>
                <td>{partnerplace.branch_number}</td>
                <td>{partnerplace.street}</td>
                <td>{partnerplace.zip_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  partner: state.partner.partner,
});

export default connect(mapStateToProps, { getPartner })(PartnerDetail);
