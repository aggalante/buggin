import React, { Component } from "react";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Row from "../common/layout/Row";
import ProjectWidget from "../common/widgets/ProjectWidget";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Content>
          <Row>
            <ProjectWidget name='Project 1' />
            <ProjectWidget name='Project 2' />
          </Row>
        </Content>
      </div>
    );
  }
}
