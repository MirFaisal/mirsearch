import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./contexts/AppContextprovider.jsx";
import "./index.css";
import { route } from "./routers/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <RouterProvider router={route} />
  </AppContextProvider>
);
