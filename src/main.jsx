import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import NavBar from "./components/NavBar.jsx";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="w-full overflow-hidden">
      <RouterProvider router={router} />
    </div>
  </Provider>
);
