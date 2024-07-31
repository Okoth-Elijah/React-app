import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import FooterPage from "../Pages/FooterPage";

const MainLayout = () => {
  return (
    <div className="border-2">
      <Navbar />
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default MainLayout;
