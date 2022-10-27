import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostItem } from "./listOfPostsSlice";

export interface EditPostType {
    isEdit: boolean;
    post: PostItem;
}

export const editPostSlice = createSlice({
    name: "editPost",
    initialState: {
        isEdit: false,
        post: { id: 0, userId: 0, title: "", body: "" },
    },
    reducers: {
        setIsEdit: (state: EditPostType, action: PayloadAction<boolean>) => {
            state.isEdit = action.payload;
        },
        setEditPost: (state: EditPostType, action: PayloadAction<PostItem>) => {
            //console.log("new post: ", action.payload);
            state.post = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsEdit, setEditPost } = editPostSlice.actions;

export default editPostSlice.reducer;
