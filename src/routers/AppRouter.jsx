import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashboardRoutes } from "./DashboardRoutes";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              {/* Colocar el componente a proteger */}
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/registro"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />

        <Route
          path="/home"
          element={
              <Home/>
          }
        />


        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
