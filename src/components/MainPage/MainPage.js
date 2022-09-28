import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
}

export default MainPage;
