import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentItem {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export interface CommentsType {
    isShowComments: boolean;
    isLoading: boolean;
    comments: CommentItem[];
}

export const loadComments = createAsyncThunk(
    "comments/loadComments",
    async (targetId: number) => {
        let url =
            "https://jsonplaceholder.typicode.com/posts/" +
            targetId.toString() +
            "/comments";
        const response = await fetch(url);
        const comments = await response.json();
        return comments;
    }
);

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        isShowComments: false,
        isLoading: false,
        comments: [],
    } as CommentsType,
    reducers: {
        setIsShowComments: (
            state: CommentsType,
            action: PayloadAction<boolean>
        ) => {
            state.isShowComments = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state: CommentsType) => {
                state.isLoading = true;
            })
            .addCase(
                loadComments.fulfilled,
                (state: CommentsType, action: PayloadAction<CommentItem[]>) => {
                    state.isLoading = false;
                    state.comments = action.payload;
                }
            );
    },
});

// Action creators are generated for each case reducer function
export const { setIsShowComments } = commentsSlice.actions;

export default commentsSlice.reducer;
