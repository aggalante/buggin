import React from "react";

import MenuItem from "./MenuItem";

export default (props) => (
  <ul className='sidebar-menu'>
    <MenuItem path='/' label='Dashboard' icon='dashboard' />
    <MenuItem path='bugList' label='Bug list' icon='bug' />
  </ul>
);
