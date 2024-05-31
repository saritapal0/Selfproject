import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import FullLayout from "../layouts/Fulllayouts";
import Dashboard from "../Dashboard/Dashboard";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<FullLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
    
    </>
  )
);

export default routes;
