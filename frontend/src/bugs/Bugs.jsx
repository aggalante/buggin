import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { init, addBug, updateBug } from "./bugsActions";

import ContentHeader from "../common/template/ContentHeader";
import Tabs from "../common/tabs/Tabs";
import TabHeader from "../common/tabs/TabHeader";
import TabsHeader from "../common/tabs/TabsHeader";
import TabsContent from "../common/tabs/TabsContent";
import TabContent from "../common/tabs/TabContent";
import Content from "../common/template/Content";
import BugsList from "./BugsList";
import BugsForm from "./BugsForm";

class Bugs extends Component {
  componentWillMount() {
    this.props.init();
  }

  constructor(props) {
    super(props);
    this.addBugToProject = this.addBugToProject.bind(this);
  }

  getProjectData() {
    const currentUrl = window.location.href;
    const projectId = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
    const projectData = this.filterByProject(projectId) || [];

    return projectData;
  }

  filterByProject(id) {
    const list = this.props.list || [];
    return list.find((e) => {
      return e._id === id;
    });
  }

  addBugToProject(bugData) {
    const projectData = this.getProjectData();

    if (projectData) {
      projectData.bugs.push({ ...bugData, status: "NEW" });
      console.log(projectData);
      this.props.addBug(projectData);
    }
  }

  render() {
    const { name, bugs } = this.getProjectData();

    return (
      <>
        <ContentHeader title={`Project: ${name}`} />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Bugs list' icon='bars' target='tabList' />
              <TabHeader label='Add new bug' icon='plus' target='tabCreate' />
              <TabHeader label='Update bug' icon='pencil' target='tabUpdate' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BugsList bugs={bugs} />
              </TabContent>
              <TabContent id='tabCreate'>
                <BugsForm
                  onSubmit={this.addBugToProject.bind(this)}
                  submitLabel='Add'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BugsForm
                  onSubmit={this.props.updateBug}
                  submitLabel='Update'
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.projects.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, addBug, updateBug }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
