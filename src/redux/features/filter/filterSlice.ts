import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Filter = "all" | "fiction" | "historical";

type IInitialState = {
  filter: Filter;
  searchTerm: string;
};

const initialState: IInitialState = {
  filter: "all",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChanged: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { filterChanged } = filterSlice.actions;

export default filterSlice.reducer;
