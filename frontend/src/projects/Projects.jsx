import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Content from "../common/template/Content";
import Tabs from "../common/tabs/Tabs";
import TabsHeader from "../common/tabs/TabsHeader";
import TabsContent from "../common/tabs/TabsContent";
import TabHeader from "../common/tabs/TabHeader";
import TabContent from "../common/tabs/TabContent";
import ProjectsList from "./ProjectsList";
import ProjectsForm from "./ProjectsForm";

import { init, create, update, remove } from "./projectsActions";

class Projects extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Projects list' icon='bars' target='tabList' />
              <TabHeader label='Add new' icon='plus' target='tabCreate' />
              <TabHeader
                label='Edit project'
                icon='pencil'
                target='tabUpdate'
              />
              <TabHeader
                label='Delete project'
                icon='trash-o'
                target='tabDelete'
              />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <ProjectsList />
              </TabContent>
              <TabContent id='tabCreate'>
                <ProjectsForm onSubmit={this.props.create} submitLabel='Add' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <ProjectsForm onSubmit={this.props.update} submitLabel='Edit' />
              </TabContent>
              <TabContent id='tabDelete'>
                <ProjectsForm
                  onSubmit={this.props.remove}
                  submitLabel='Delete'
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(Projects);
