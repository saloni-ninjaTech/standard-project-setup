import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./themeSlice";
export default configureStore({
  reducer: counterReducer, //add reducers here
});
