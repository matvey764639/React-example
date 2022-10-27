import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterBarType {
    filter: string;
    isFilter: boolean;
}

export const filterBarSlice = createSlice({
    name: "filterBar",
    initialState: {
        filter: "",
        isFilter: false,
    },
    reducers: {
        setFilter: (state: FilterBarType, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        inverseIsFilter: (state: FilterBarType) => {
            state.isFilter = !state.isFilter;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setFilter, inverseIsFilter } = filterBarSlice.actions;

export default filterBarSlice.reducer;
