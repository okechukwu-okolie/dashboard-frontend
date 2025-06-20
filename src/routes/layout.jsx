import { Outlet } from "react-router-dom";
import { Sidebar } from "../layouts/Sidebar";
import { Header } from "../layouts/header";
import { cn } from "../utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks/use-click-outside";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width:768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  const sidebarRef = useRef(null);

  useEffect(()=>{
    setCollapsed(!isDesktopDevice)
  },[isDesktopDevice])

  useClickOutside([sidebarRef],()=>{
    if(!isDesktopDevice && !collapsed){
      setCollapsed(true)
    }
  })

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div className={cn("pointer-event-none fixed inset-0 -z-10  bg-black opacity-0 transition-opacity",
         !collapsed && "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50 , ")}></div>
      <Sidebar
        ref={sidebarRef}
        collapsed={collapsed}
      />
      <div className={cn("transition-[margin] duration-300", collapsed ?'md:ml-[78px]':'md:ml-[240px]')}>
        {/* <button className="text-white py-3 px-6 border-white rounded-[20px] bg-slate-900" onClick={()=>setCollapsed(!collapsed)}> click me</button> */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="mx-6 h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
