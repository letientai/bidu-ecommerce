import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/navbar";
import { Cart } from "../pages/cart/cart";
import { Checkout } from "../pages/checkout/checkout";
import { Community } from "../pages/community/community";
import { DetailProduct } from "../pages/detail/detailProduct";
import { Landing } from "../pages/landing/landing";
import { Home } from "../pages/home/home";
import { HomeSearch } from "../pages/homeSearch/homeSearch";
import { StoreProvider } from "../store";
import { Footer } from "../components/layout/footer";
import { Admin } from "../pages/admin/admin";
import { Donhang } from "../pages/admin/donhang";
export const Routerr = (prop) => {
  const [checklogin, setCheckLogin] = useState(false);
  const admin = localStorage.getItem("isAdmin");

  const checkLogin = (check) => {
    setCheckLogin(!checklogin);
  };

  return (
    <div>
      <StoreProvider>
        {admin === 'true' ? (
          <Router>
              <Routes>
                <Route path="/bidu-ecommerce" element={<Admin />} />
                <Route path="/Donhang" element={<Donhang />} />
              </Routes>
          </Router>
        ) : (
          <Router>
            <Navbar checkLogin={checkLogin} />
            <Routes>
              <Route path="/bidu-ecommerce" element={<Home />} />
              <Route
                path="/tim-kiem/keyword=:search"
                element={<HomeSearch />}
              />
              <Route
                path="/san-pham/:id"
                element={<DetailProduct checklogin={checklogin} />}
              />
              <Route path="/gio-hang" element={<Cart />} />
              <Route path="/thanh-toan" element={<Checkout />} />
              <Route path="/cong-dong" element={<Community />} />
              <Route path="/landing" element={<Landing />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </StoreProvider>

      {/* <StoreProvider>
        <Router>
          <Navbar checkLogin={checkLogin} />
          <Routes>
            <Route path="/bidu-ecommerce" element={<Home />} />
            <Route path="/tim-kiem/keyword=:search" element={<HomeSearch />} />
            <Route
              path="/san-pham/:id"
              element={<DetailProduct checklogin={checklogin} />}
            />
            <Route path="/gio-hang" element={<Cart />} />
            <Route path="/thanh-toan" element={<Checkout />} />
            <Route path="/cong-dong" element={<Community />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
          <Footer />
        </Router>
      </StoreProvider> */}
    </div>
  );
};
