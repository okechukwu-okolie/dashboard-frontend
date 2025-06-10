import { Outlet } from "react-router-dom";
import { Sidebar } from "../layouts/Sidebar";
import { Header } from "../layouts/header";
import { cn } from "../utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef, useState } from "react";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width:768px)");
  const [collapsed, setCollapsed] = useState(true);

  const sidebarRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div className={cn("pointer-event-none fixed inset-0 -z-10  bg-black opacity-0 transition-opacity", !collapsed && "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50 , ")}></div>
      <Sidebar
        ref={sidebarRef}
        collapsed={collapsed}
      />
      <div className={cn("transition-[margin] duration-300", collapsed ?'md:ml-[78px]':'md:ml-[240px]')}>
        <Header collapsed={collapsed}
        setCollapsed={setCollapsed} />
        <div className="mx-6 h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
