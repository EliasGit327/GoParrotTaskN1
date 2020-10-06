import { combineReducers, createStore } from "redux";
import { themeReducer } from "./reducers/theme/theme-reducer";
import postsReducer from "./reducers/posts/posts-reducer";
const rootReducer = combineReducers({
  themeReducer,
  postsReducer
});
const rootStore = createStore(rootReducer);
export default rootStore;
