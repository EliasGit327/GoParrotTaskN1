import IPostsState from "./iposts-state";
import { PostsAction } from "./post-actions";

const initialState: IPostsState = {
  posts: [],
  pinned: []
}

const postsReducer = (state: IPostsState = initialState, action: PostsAction) => {
  switch (action.type) {
    case 'PIN_POST':
      return { ...state, pinned: [...state.pinned, action.payload] };

    case "UNPIN_POST":
      const copy = { ...state }.pinned;
      const index = copy.indexOf(action.payload);
      copy.splice(index, 1);
      return { ...state, pinned: [...copy] };

    case "UNPIN_ALL_POSTS":
      return { ...state, pinned: [] }

    case 'SET_POSTS':
      return { ...state, posts: action.payload }

    default:
      return state;
  }
}

export default postsReducer;
