import React from "react";
import Content from "../template/Content";

import ContentHeader from "../template/ContentHeader";
import BugWidget from "./BugWidget";

export default (props) => {
  const name = props.name;
  const nrOfNews = props.new || 0;
  const nrOfTodos = props.todo || 0;
  const nrOfInProgress = props.inProgress || 0;
  const nrOfBlocked = props.blocked || 0;
  const nrOfDone = props.done || 0;
  const nrOfRemoved = props.removed || 0;

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
          color='orange'
          icon='bug'
          value={nrOfNews}
          text='New'
        />
        <BugWidget
          cols='6 2'
          color='purple'
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
          color='brown'
          icon='trash'
          value={nrOfRemoved}
          text='Removed'
        />
      </div>
    </div>
  );
};
