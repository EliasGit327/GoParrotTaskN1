import IPost from "../../../models/IPost";

export type PostsAction =
  LoadPosts |
  PinPost |
  UnpinPost |
  UnpinAllPosts |
  SortPosts |
  PinPosts;

interface LoadPosts {
  type: 'SET_POSTS';
  payload: IPost[];
}

interface PinPost {
  type: 'PIN_POST';
  payload: number;
}

interface PinPosts {
  type: 'PIN_POSTS';
  payload: number[];
}

interface UnpinPost {
  type: 'UNPIN_POST';
  payload: number;
}

interface UnpinAllPosts {
  type: 'UNPIN_ALL_POSTS';
  payload?: null | undefined;
}

interface SortPosts {
  type: 'SORT_POSTS';
  payload?: null | undefined;
}
