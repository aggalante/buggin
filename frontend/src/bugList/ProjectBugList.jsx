import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Content from "../common/template/Content";
import { getList } from "../projects/projectsActions";
import BugsTable from "./BugsTable";
import ContentHeader from "../common/template/ContentHeader";

const INITIAL_VALUES = [
  {
    name: "P 1",
    description: "blabla",
    bugs: [
      {
        name: "Bug 1",
        description: "Bug 1 description",
        status: "NEW",
      },
      {
        name: "Bug 2",
        description: "Bug 2 description",
        status: "NEW",
      },
      {
        name: "Bug 3",
        description: "Bug 3 description",
        status: "INPROGRESS",
      },
    ],
  },
  {
    name: "P 2",
    description: "blabla",
    bugs: [
      {
        name: "Bug 4",
        description: "Bug 4 description",
        status: "NEW",
      },
      {
        name: "Bug 5",
        description: "Bug 5 description",
        status: "NEW",
      },
      {
        name: "Bug 6",
        description: "Bug 6 description",
        status: "INPROGRESS",
      },
    ],
  },
];

class BugList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  filterByProject(id) {
    // const list = this.props.list || [];
    // return list.filter((e) => {
    //   return e.id === id;
    // });

    return INITIAL_VALUES.find((e) => {
      return e.name === "P 1";
    });
  }

  getBugsByStatus(bugs, status) {
    return bugs.filter((e) => {
      return e.status === status;
    });
  }

  render() {
    const currentUrl = window.location.href;
    const projectId = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
    const projectData = this.filterByProject(projectId);

    const { name, bugs } = projectData;

    const newBugs = this.getBugsByStatus(bugs, "NEW");
    const todoBugs = this.getBugsByStatus(bugs, "TODO");
    const inProgressBugs = this.getBugsByStatus(bugs, "INPROGRESS");
    const blockedBugs = this.getBugsByStatus(bugs, "BLOCKED");
    const doneBugs = this.getBugsByStatus(bugs, "DONE");
    const deletedBugs = this.getBugsByStatus(bugs, "DELETED");

    return (
      <>
        <ContentHeader title={`Project: ${name}`} />
        <Content>
          <BugsTable title='New' icon='bug' bugs={newBugs} />
          <BugsTable title='To do' icon='list' bugs={todoBugs} />
          <BugsTable title='In progress' icon='spinner' bugs={inProgressBugs} />
          <BugsTable title='Blocked' icon='minus-circle' bugs={blockedBugs} />
          <BugsTable title='Done' icon='check' bugs={doneBugs} />
          <BugsTable title='Deleted' icon='trash' bugs={deletedBugs} />
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.projects.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BugList);
