import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/navbar";
import { Cart } from "../pages/cart/cart";
import { Checkout } from "../pages/checkout/checkout";
import { DetailProduct } from "../pages/detail/detailProduct";
import { Home } from "../pages/home/home";
import { HomeSearch } from "../pages/homeSearch/homeSearch";
import { StoreProvider } from "../store";
export const Routerr = (prop) => {
  const [checklogin, setCheckLogin] = useState(false);
  const checkLogin = (check) => {
    setCheckLogin(!checklogin);
  };
  return (
    <div>
      <StoreProvider>
        <Router>
          <Navbar checkLogin={checkLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tim-kiem/keyword=:search" element={<HomeSearch />} />
            <Route
              path="/san-pham/:id"
              element={<DetailProduct checklogin={checklogin} />}
            />
            <Route path="/gio-hang" element={<Cart />} />
            <Route path="/thanh-toan" element={<Checkout />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
};
