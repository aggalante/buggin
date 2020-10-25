import React from "react";

export default (props) => {
  function renderRows() {
    const bugs = props.bugs || [];
    return bugs.map((b) => (
      <tr key={b._id}>
        <td>{b.name}</td>
        <td>{b.description}</td>
        <td>{b.status}</td>
        <td></td>
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
              <th style={{ width: "15%" }}>Name</th>
              <th>Description</th>
              <th style={{ width: "10%" }}>Status</th>
              <th style={{ width: "25%" }}></th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};
