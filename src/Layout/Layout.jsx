import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-inter">
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
