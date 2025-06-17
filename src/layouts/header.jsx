import { ChevronsLeft, Search } from "lucide-react";
import PropTypes from "prop-types";
import {useTheme} from '@/hooks/use-theme'
import {Moon,Sun,Bell} from 'lucide-react'
import profilePic from '@/assets/profile-image.jpg'

export const Header = ({collapsed,setCollapsed}) => {
  const {theme, setTheme} = useTheme()
  return <header className="relative z-10 h-[60px] flex items-center justify-between bg-white px-4  pt-3 shadow-md transition-colors dark:bg-slate-900">
              <div className="flex items-center gap-x-3">
                <button className="btn-ghost size-10"  onClick={()=>setCollapsed(!collapsed)}>
                  <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                  <Search  size={20} className="text-slate-300" />
                  <input type="text" placeholder=" Search...." id="search" 
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-300"/>
                </div>
              </div>
              
              <div className='flex items-center gap-x-3'>
                <button className='btn-ghost size-10' onClick={()=>setTheme(theme === "light" ? "dark":"light")}>
                  <Sun size={20} className='dark:hidden' />
                  <Moon size={20} className='hidden dark:block' />
                </button>
                <button className='btn-ghost size-10'>
                  <Bell size={20} />                
                </button>
                <button className='btn-ghost size-10 overflow-hidden rounded-full' >
                  <img src={profilePic} alt='' className='size-full object-cover rounded-full'/>
                </button>
              </div>
         </header>;
};

Header.propTypes={
  collapsed:PropTypes.bool,
  setCollasped:PropTypes.func
}
