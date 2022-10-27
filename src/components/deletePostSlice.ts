import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DeletePostType {
    isDelete: boolean;
}

export const deletePostSlice = createSlice({
    name: "deletePost",
    initialState: {
        isDelete: false,
    },
    reducers: {
        setIsDelete: (
            state: DeletePostType,
            action: PayloadAction<boolean>
        ) => {
            state.isDelete = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsDelete } = deletePostSlice.actions;

export default deletePostSlice.reducer;
