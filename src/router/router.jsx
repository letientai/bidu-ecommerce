import React from "react";
// import {
//   Routes,
//   BrowserRouter,
//   Route,
//   Switch,
//   Link,
//   useRoutes,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/navbar";
import { Home } from "../pages/home/home";
export const Routerr = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
