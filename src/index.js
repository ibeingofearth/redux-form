import React from 'react';
import 'antd/dist/antd.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store/store";
import Login from './components/login';
import Logout from './components/logout';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
{
path: "/",
element: (
  <Login />
),
},
{
path: "/logout",
element: <Logout />,
},
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

