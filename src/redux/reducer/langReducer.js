const initalState = {
  lang: localStorage.getItem("lang"),
};

const langReducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        lang: action.language_code,
      };
    default:
      return state;
  }
};

export {langReducer}