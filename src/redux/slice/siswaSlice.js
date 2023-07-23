import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NIS: null,
};

export const siswaSlice = createSlice({
  name: "siswa",
  initialState,
  reducers: {
    setNIS: (state, action) => {
      state.NIS = action.payload;
    },
    setNISNull: (state, action) => {
      state.NIS = null;
    },
  },
});

export const { setNIS, setNISNull } = siswaSlice.actions;

export default siswaSlice.reducer;
