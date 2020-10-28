import React from "react";

import BugsTable from "./BugsTable";

export default (props) => {
  const bugs = props.bugs || [];
  const newBugs = getBugsByStatus(bugs, "NEW");
  const todoBugs = getBugsByStatus(bugs, "TODO");
  const inProgressBugs = getBugsByStatus(bugs, "INPROGRESS");
  const blockedBugs = getBugsByStatus(bugs, "BLOCKED");
  const doneBugs = getBugsByStatus(bugs, "DONE");
  const removedBugs = getBugsByStatus(bugs, "REMOVED");

  function getBugsByStatus(bugs, status) {
    return bugs.filter((e) => {
      return e.status === status;
    });
  }

  return (
    <div>
      <BugsTable
        type='NEW'
        title='New'
        icon='bug'
        bugs={newBugs}
        changeState={props.changeState}
      />
      <BugsTable
        type='TODO'
        title='To do'
        icon='list'
        bugs={todoBugs}
        changeState={props.changeState}
      />
      <BugsTable
        type='INPROGRESS'
        title='In progress'
        icon='spinner'
        bugs={inProgressBugs}
        changeState={props.changeState}
      />
      <BugsTable
        type='BLOCKED'
        title='Blocked'
        icon='minus-circle'
        bugs={blockedBugs}
        changeState={props.changeState}
      />
      <BugsTable
        type='DONE'
        title='Done'
        icon='check'
        bugs={doneBugs}
        changeState={props.changeState}
      />
      <BugsTable
        type='REMOVED'
        title='Removed'
        icon='trash'
        bugs={removedBugs}
        changeState={props.changeState}
      />
    </div>
  );
};
