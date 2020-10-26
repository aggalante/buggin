import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";

import { selectTab, showTabs } from "../common/tabs/tabActions";
import { getList } from "../projects/projectsActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("BugsForm", INITIAL_VALUES),
  ];
}

export function addBug(values) {
  return submit(values, "put");
}

export function updateBug(values) {
  return submit(values, "put");
}

function submit(values, method) {
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
