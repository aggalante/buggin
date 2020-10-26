import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import AuthReducer from "../auth/authReducer";
import TabReducer from "../common/tabs/tabReducer";
import ProjectsReducer from "../projects/projectsReducer";
import DashboardReducer from "../dashboard/dashboardReducer";

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
  dashboard: DashboardReducer,
  tab: TabReducer,
  projects: ProjectsReducer,
});

export default rootReducer;
