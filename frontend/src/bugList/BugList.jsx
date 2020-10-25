import React from "react";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Row from "../common/layout/Row";

export default function BugList() {
  return (
    <div>
      <ContentHeader title='Bug list' />
      <Content>
        <Row></Row>
      </Content>
    </div>
  );
}
