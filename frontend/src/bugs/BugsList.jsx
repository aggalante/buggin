import React from "react";

import BugsTable from "./BugsTable";

export default (props) => {
  const bugs = props.bugs || [];
  const newBugs = getBugsByStatus(bugs, "NEW");
  const todoBugs = getBugsByStatus(bugs, "TODO");
  const inProgressBugs = getBugsByStatus(bugs, "INPROGRESS");
  const blockedBugs = getBugsByStatus(bugs, "BLOCKED");
  const doneBugs = getBugsByStatus(bugs, "DONE");
  const deletedBugs = getBugsByStatus(bugs, "DELETED");

  function getBugsByStatus(bugs, status) {
    return bugs.filter((e) => {
      return e.status === status;
    });
  }

  return (
    <div>
      <BugsTable title='New' icon='bug' bugs={newBugs} />
      <BugsTable title='To do' icon='list' bugs={todoBugs} />
      <BugsTable title='In progress' icon='spinner' bugs={inProgressBugs} />
      <BugsTable title='Blocked' icon='minus-circle' bugs={blockedBugs} />
      <BugsTable title='Done' icon='check' bugs={doneBugs} />
      <BugsTable title='Deleted' icon='trash' bugs={deletedBugs} />
    </div>
  );
};
