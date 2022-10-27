import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface PostsType {
    posts: PostItem[];
    isLoading: boolean;
}

export const loadPosts = createAsyncThunk(
    "posts/loadPosts",
    async (url: string) => {
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    }
);

export const listOfPostsSlice = createSlice({
    name: "listOfPosts",
    initialState: {
        posts: [],
        isLoading: false,
    } as PostsType,
    reducers: {
        setPosts: (state: PostsType, action: PayloadAction<PostItem[]>) => {
            state.posts = action.payload;
        },
        deletePost: (state: PostsType, action: PayloadAction<number>) => {
            //console.log("deletePost reducer >> ", action);
            try {
                let filteredPosts = state.posts.filter(
                    (p) => p.id === action.payload
                );
                let ind = state.posts.indexOf(filteredPosts[0]);
                if (ind === 0) {
                    state.posts = state.posts.slice(1);
                } else if (ind !== -1) {
                    state.posts = state.posts
                        .slice(0, ind - 1)
                        .concat(state.posts.slice(ind));
                }
            } catch (e) {
                console.log(e);
            }
        },
        replacePost: (state: PostsType, action: PayloadAction<PostItem>) => {
            //console.log("replacePost reducer >> ", action);
            let filteredPosts = state.posts.filter(
                (p) => p.id === action.payload.id
            );
            let ind = state.posts.indexOf(filteredPosts[0]);
            if (ind !== -1) {
                state.posts[ind] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state: PostsType) => {
                state.isLoading = true;
                //console.log("loading posts");
            })
            .addCase(
                loadPosts.fulfilled,
                (state: PostsType, action: PayloadAction<PostItem[]>) => {
                    state.isLoading = false;
                    state.posts = action.payload;
                    //console.log("posts have been loaded");
                    //console.log(action.payload);
                }
            );
    },
});

export const { deletePost, replacePost } = listOfPostsSlice.actions;

export default listOfPostsSlice.reducer;
