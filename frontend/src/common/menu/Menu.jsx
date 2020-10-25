import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getList } from "../../projects/projectsActions";

import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

class Menu extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderTreeSubItems() {
    const list = this.props.list || [];
    return list.map((p) => (
      <MenuItem path={`/${p._id}`} label={`${p.name}`} icon='code' />
    ));
  }

  render() {
    return (
      <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuItem path='projects' label='Projects' icon='tasks' />
        <MenuTree label='Bug list' icon='bug'>
          {this.renderTreeSubItems()}
        </MenuTree>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.projects.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
