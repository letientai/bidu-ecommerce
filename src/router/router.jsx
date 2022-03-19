import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/navbar";
import { DetailProduct } from "../pages/detail/detailProduct";
import { Home } from "../pages/home/home";
import { HomeSearch } from "../pages/homeSearch/homeSearch";
export const Routerr = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tim-kiem/keyword=:search" element={<HomeSearch />} />
          <Route path="/san-pham/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </div>
  );
};
