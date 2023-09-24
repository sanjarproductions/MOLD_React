import { createStore } from "redux";
// import { langReducer } from "../reducer/langReducer";
import { rootReducer } from "../reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
