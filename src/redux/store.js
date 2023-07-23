import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import siswaReducer from "./slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    siswa: siswaReducer,
  },
});

export default store;
