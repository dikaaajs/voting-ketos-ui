import LoginMurid from "../page/LoginMurid.jsx";
import CoblosKetos from "../page/CoblosKetos.jsx";
import ProtectCoblos from "./ProtectCoblos.jsx";
import LoginAdmin from "../page/LoginAdmin.jsx";
import ProtectApp from "./ProtectApp.jsx";
import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginAdmin />,
  },
  {
    path: "/app",
    element: <ProtectApp />,
    children: [
      {
        path: "murid",
        element: <LoginMurid />,
      },
    ],
  },
  {
    path: "/coblos",
    element: <ProtectCoblos />,
    children: [
      {
        path: "ketos",
        element: <CoblosKetos />,
      },
    ],
  },
]);

export default router;
