import React from "react";
import BugActionButton from "./BugActionButton";

export default (props) => (
  <div>
    <BugActionButton
      {...props}
      disabled={props.type === "NEW"}
      type='NEW'
      title='NEW'
      color='warning'
    />
    <BugActionButton
      {...props}
      disabled={props.type === "TODO"}
      type='TODO'
      title='TO DO'
      color='info'
    />
    <BugActionButton
      {...props}
      disabled={props.type === "INPROGRESS"}
      type='INPROGRESS'
      title='IN PROGRESS'
      color='primary'
    />

    <BugActionButton
      {...props}
      disabled={props.type === "BLOCKED"}
      type='BLOCKED'
      title='BLOCK'
      color='danger'
    />
    <BugActionButton
      {...props}
      disabled={props.type === "DONE"}
      type='DONE'
      title='DONE'
      color='success'
    />
    <BugActionButton
      {...props}
      disabled={props.type === "REMOVED"}
      type='REMOVED'
      title='REMOVE'
      color='default'
    />
  </div>
);
