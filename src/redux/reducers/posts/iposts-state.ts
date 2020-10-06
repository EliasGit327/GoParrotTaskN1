import IPost from "../../../models/IPost";

export default interface IPostsState {
  posts: IPost[];
  pinned: number[]
}
