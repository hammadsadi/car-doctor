import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div className="font-inter">
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
