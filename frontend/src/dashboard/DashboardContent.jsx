import React from "react";

import ProjectWidget from "../common/widgets/ProjectWidget";

export default (props) => {
  function renderWidgets() {
    const summary = props.summary || [];
    return summary.map((p) => <ProjectWidget project={p} />);
  }
  return <div>{renderWidgets()}</div>;
};
