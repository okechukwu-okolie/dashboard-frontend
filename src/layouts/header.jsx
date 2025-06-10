import { ChevronsLeft } from "lucide-react";
import PropTypes from "prop-types";

export const Header = ({collapsed,setCollasped}) => {
  return <header className="relative z-10 h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
    <div className="flex items-center gap-x-3">
      <button className="btn-ghost size-10"  onClick={()=>setCollasped(!collapsed)}>
        <ChevronsLeft className={collapsed && "rotate-180"} />
      </button>
    </div>
  </header>;
};

Header.propTypes={
  collapsed:PropTypes.bool,
  setCollasped:PropTypes.func
}
