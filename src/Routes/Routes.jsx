import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/Home/Home";
import AllAppsPage from "../pages/AllApps/Apps";
import AppDetailsPage from "../pages/AppDetailsPage/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import ErrorPage from "../pages/ErrorNotFoundPages/ErrorPage/ErrorPage";
import RouteLoading from "../components/Loading/RouteLoader/RouteLoader";
import GlobalSpinner from "../components/Loading/GlobalSpinner/GlobalSpinner";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    HydrateFallback: RouteLoading,
    children: [
      {
        index: true,
        Component: HomePage,
        HydrateFallback: RouteLoading,
      },
      {
        path: "apps",
        Component: AllAppsPage,
        loader: () => fetch("/apps-data.json"),
        HydrateFallback: RouteLoading,
      },
      {
        path: "apps/:appId",
        Component: AppDetailsPage,
        loader: () => fetch("/apps-data.json"),
        HydrateFallback: RouteLoading,
      },
      {
        path: "my-installation",
        Component: MyInstallation,
        loader: () => fetch("/apps-data.json"),
        HydrateFallback: RouteLoading,
      },
      {
        path: "loading",
        Component: RouteLoading,
      },
      {
        path: "loader",
        Component: GlobalSpinner,
      },
    ],
  },
]);
