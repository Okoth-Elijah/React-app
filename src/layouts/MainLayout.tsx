import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const MainLayout = () => {
  return (
    <div className="border-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
