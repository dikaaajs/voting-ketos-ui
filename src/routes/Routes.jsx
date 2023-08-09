import CoblosKetos from "../page/CoblosKetos.jsx";
import ProtectCoblos from "./ProtectCoblos.jsx";
import LoginAdmin from "../page/LoginAdmin.jsx";
import ProtectApp from "./ProtectApp.jsx";
import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import LobiMurid from "../page/LobiMurid.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginAdmin />,
  },
  // route setelah login admin
  {
    path: "/app",
    element: <ProtectApp />,
    children: [
      {
        path: "lobi",
        element: <LobiMurid />,
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
