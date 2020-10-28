import React from "react";
import BugActions from "./BugActions";

export default (props) => {
  function renderRows() {
    const bugs = props.bugs || [];
    return bugs.map((bug) => (
      <tr key={bug._id}>
        <td>{bug.name}</td>
        <td>{bug.description}</td>
        <td>{bug.status}</td>
        <td>
          <BugActions
            type={props.type}
            bug={bug}
            changeState={props.changeState}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className='box box-default'>
      <div className='box-header with-order'>
        <h3 className='box-title'>
          <i className={`fa fa-${props.icon}`} />
          <span>
            {" "}
            {props.title} ({props.bugs.length})
          </span>
        </h3>
        <div className='box-tools pull-right'>
          <button
            type='button'
            className='btn btn-box-tool'
            data-widget='collapse'>
            <i className='fa fa-minus'></i>
          </button>
        </div>
      </div>
      <div className='box-body'>
        <table className='table'>
          <thead>
            <tr>
              <th style={{ width: "250px" }}>Name</th>
              <th>Description</th>
              <th style={{ width: "100px" }}>Status</th>
              <th style={{ width: "360px" }}></th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};
