import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPartners } from "../../actions/partners";

export class PartnersList extends Component {
  static propTypes = {
    partners: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPartners();
  }
  render() {
    return (
      <Fragment>
        <h3>Partner Auswahl</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Partner</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {this.props.partners.map((partner, index) => (
              <tr key={partner.partner_short_name + "-" + index}>
                <td>
                  <Link to={`/partners/${partner.partner_short_name}`}>
                    {partner.display_name}
                  </Link>
                </td>
                <td>{partner.partner_short_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  partners: state.partners.partners,
});

export default connect(mapStateToProps, { getPartners })(PartnersList);
