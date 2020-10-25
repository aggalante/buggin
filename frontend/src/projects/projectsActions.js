import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";

import { selectTab, showTabs } from "../common/tabs/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export function getList() {
  const request = axios.get(`${BASE_URL}/projectsTracking`);
  return {
    type: "PROJECTS_FETCHED",
    payload: request,
  };
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("ProjectsForm", INITIAL_VALUES),
  ];
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

export function showUpdate(project) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("ProjectsForm", project),
  ];
}

export function showDelete(project) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("ProjectsForm", project),
  ];
}

function submit(values, method) {
  console.log(method);
  console.log(values);
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/projectsTracking/${id}`, values)
      .then((resp) => {
        toastr.success("Success", "Operation was successful!");
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Error", error));
      });
  };
}
