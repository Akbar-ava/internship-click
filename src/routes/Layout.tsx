import type React from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <main className="main-app">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;