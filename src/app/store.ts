import { configureStore } from "@reduxjs/toolkit";
import appReducer, { AppType } from "../appSlice";
import deletePostReducer, {
    DeletePostType,
} from "../components/deletePostSlice";
import commentsReducer, { CommentsType } from "../components/commentsSlice";
import editPostReducer, { EditPostType } from "../components/editPostSlice";
import filterBarReducer, { FilterBarType } from "../components/filterBarSlice";
import postsReducer, { PostsType } from "../components/listOfPostsSlice";

export interface StoreType {
    app: AppType;
    deletePost: DeletePostType;
    editPost: EditPostType;
    comments: CommentsType;
    filterBar: FilterBarType;
    posts: PostsType;
}

export default configureStore<StoreType>({
    reducer: {
        app: appReducer,
        deletePost: deletePostReducer,
        editPost: editPostReducer,
        comments: commentsReducer,
        filterBar: filterBarReducer,
        posts: postsReducer,
    },
});
