import { RouterProvider, createBrowserRouter, type RouteObject } from "react-router-dom";
import { PATHS } from "./lib/routing";
import Base from "./pages/Base";
import ErrorBoundry from "./pages/ErrorBoundry";
import { LoadingSpinner } from "./components/ui/loadingSpinner";
import Feed from "./pages/Feed";
import Chart from "./pages/Chart";

const ROUTES: RouteObject[] = [
  {
    path: PATHS.baseUrl(),
    element: <Base />,
    children: [
      {
        index: true,
        element: <Feed />,
        errorElement: <ErrorBoundry />
      },
      {
        path: PATHS.chart(),
        element: <Chart />,
        errorElement: <ErrorBoundry />
      }
    ],
    errorElement: <ErrorBoundry />
  }
]

export const AppRouteProvider = () => {
  const router = createBrowserRouter(ROUTES);

  return (
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  );
};