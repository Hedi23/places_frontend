import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPartners } from "../../actions/partners";
import Search from "../Search";
import Pagination from "../Pagination";

export class PartnersList extends Component {
  static propTypes = {
    partners: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPartners();
    this.setState({
      totalRecords: this.props.partners.length,
    });
  }
  state = {
    filter: "",
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  onChangePage = (data) => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex,
    });
  };
  showProducts = (partners) => {
    var result = null;
    if (partners.length > 0) {
      result = partners
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
        ));
    }
    return result;
  };
  render() {
    var { partners } = this.props;
    var {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex,
    } = this.state;
    var rowsPerPage = [];

    rowsPerPage = partners.slice(startIndex, endIndex + 1);

    return (
      <Fragment>
        <h3>Partner Auswahl</h3>
        <Search value={this.props.filter} onChange={this.handleChange} />
        <div className="box_product_control mb-15">
          <div className="row">
            <div className="col-xs-12 box_change_pagelimit">
              Show
              <select
                className="form-control"
                value={pageLimit}
                onChange={(e) =>
                  this.setState({ pageLimit: parseInt(e.target.value) })
                }
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              Partners
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Partner</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>{this.showProducts(rowsPerPage)}</tbody>
        </table>
        <div className="box_pagination">
          <div className="row">
            <div className="col-xs-12 box_pagination_info text-right">
              <p>
                {partners.length} Partners | Page {currentPage}/{totalPages}
              </p>
            </div>
            <div className="col-xs-12 text-center">
              <Pagination
                totalRecords={partners.length}
                pageLimit={pageLimit || 5}
                initialPage={1}
                pagesToShow={5}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  partners: state.partners.partners,
});

export default connect(mapStateToProps, { getPartners })(PartnersList);
