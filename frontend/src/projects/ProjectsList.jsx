import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "../common/template/Custom.css";
import { getList, showUpdate, showDelete } from "./projectsActions";

class ProjectsList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((p) => (
      <tr key={p._id}>
        <td>{p.name}</td>
        <td>{p.description}</td>
        <td>
          <button
            className='btn btn-default'
            onClick={() => {
              this.props.showUpdate(p);
            }}>
            <i className='fa fa-pencil'></i>
          </button>
          <button
            className='btn btn-warning'
            onClick={() => {
              this.props.showDelete(p);
            }}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th className='table-actions'></th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.projects.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
