import React from "react";

import BugWidget from "./BugWidget";

export default (props) => {
  const name = props.project.name;
  const summary = props.project.summary;

  const nrOfNews = summary.new || 0;
  const nrOfTodos = summary.todo || 0;
  const nrOfInProgress = summary.inProgress || 0;
  const nrOfBlocked = summary.blocked || 0;
  const nrOfDone = summary.done || 0;
  const nrOfRemoved = summary.removed || 0;

  return (
    <div className='box box-default'>
      <div className='box-header with-order'>
        <h3 className='box-title'>{name}</h3>
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
        <BugWidget
          cols='6 2'
          color='yellow'
          icon='bug'
          value={nrOfNews}
          text='New'
        />
        <BugWidget
          cols='6 2'
          color='teal'
          icon='list'
          value={nrOfTodos}
          text='To do'
        />
        <BugWidget
          cols='6 2'
          color='blue'
          icon='spinner'
          value={nrOfInProgress}
          text='In progress'
        />
        <BugWidget
          cols='6 2'
          color='red'
          icon='minus-circle'
          value={nrOfBlocked}
          text='Blocked'
        />
        <BugWidget
          cols='6 2'
          color='green'
          icon='check'
          value={nrOfDone}
          text='Done'
        />
        <BugWidget
          cols='6 2'
          color='maroon'
          icon='trash'
          value={nrOfRemoved}
          text='Removed'
        />
      </div>
    </div>
  );
};
