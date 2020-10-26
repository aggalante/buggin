import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "../common/template/Content";
import Row from "../common/layout/Row";
import ProjectWidget from "../common/widgets/ProjectWidget";

import { getSummary } from "./dashboardActions";
import DashboardContent from "./DashboardContent";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    return (
      <div>
        <Content>
          <Row>
            <DashboardContent summary={this.props.summary} />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ summary: state.dashboard.summary });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
