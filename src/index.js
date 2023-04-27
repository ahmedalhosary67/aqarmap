import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home/index";
import Compounds from "./pages/compounds/index";
import Properties from "./pages/properties/index";
import SearchFilter from "./pages/searchFilters";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ListingPage from "./pages/listing";
import Root from "./pages/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import "./index.css";
import ListOfProperties from "./pages/listOfProperties";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "compounds/:type",
        element: <Compounds />,
      },
      {
        path: "properties/:type",
        element: <Properties />,
      },
      {
        path: "searchFilter",
        element: <SearchFilter />,
      },
      {
        path: "Listing/:id",
        element: <ListingPage />,
      },
      {
        path: "ListOfProperties",
        element: <ListOfProperties />,
      },
    ],
  },
]);
ReactDOM.render(
  <RouterProvider router={routes} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
