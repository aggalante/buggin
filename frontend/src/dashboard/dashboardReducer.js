const INITIAL_STATE = {};

function getBugsCount(bugs, status) {
  return bugs.filter((e) => {
    return e.status === status;
  }).length;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PROJECTS_SUMMARY_FETCHED":
      const summary = action.payload.data.map((res) => {
        const bugs = res.bugs || [];
        return {
          name: res.name,
          summary: {
            new: getBugsCount(bugs, "NEW"),
            todo: getBugsCount(bugs, "TODO"),
            inProgress: getBugsCount(bugs, "INPROGRESS"),
            blocked: getBugsCount(bugs, "BLOCKED"),
            done: getBugsCount(bugs, "DONE"),
            removed: getBugsCount(bugs, "REMOVED"),
          },
        };
      });

      return { ...state, summary: summary };
    default:
      return state;
  }
}
