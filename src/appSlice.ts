import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreType } from "./app/store";

export interface AppType {
    targetId: number;
}

export const appSlice = createSlice({
    name: "app",
    initialState: {
        targetId: 0,
    },
    reducers: {
        setTargetId: (state: AppType, action: PayloadAction<number>) => {
            //console.log("setTargetId reducer >> ", action);
            state.targetId = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTargetId } = appSlice.actions;

export default appSlice.reducer;
