import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPartners } from "../../actions/partners";
import Search from "../Search";

export class PartnersList extends Component {
  static propTypes = {
    partners: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPartners();
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
        <h3>Partner Auswahl</h3>
        <Search value={this.props.filter} onChange={this.handleChange} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Partner</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {this.props.partners
              .filter((partner) =>
                this.state.filter
                  ? partner.display_name
                      .toLowerCase()
                      .includes(this.state.filter.toLowerCase())
                  : partner.display_name
              )
              .map((partner, index) => (
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
