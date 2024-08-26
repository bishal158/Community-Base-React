import React from "react";
import { Outlet } from "react-router-dom";
import './styles/DashboardLayout.css'
import SideBar from "../components/SideBar"
function DashboardLayout() {
  return (
    <>
      <div style={{ display: "flex" }} className="main-container">
        <SideBar />
        <main style={{ flexGrow: 1 }} className="main-content-display">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;
