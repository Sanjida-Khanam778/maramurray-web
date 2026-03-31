import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { LuCircleUserRound, LuDumbbell, LuSettings } from "react-icons/lu";
import { LogOut } from "lucide-react";
import { TbDiamond } from "react-icons/tb";
import logo from "../../assets/logo2.svg";
import { RxDashboard } from "react-icons/rx";
export default function Sidebar() {
  const handleLogout = () => {};

  return (
    <div className="bg-sidebar text-white h-screen sticky left-0 z-20 flex flex-col justify-between w-48 md:w-64 xl:w-72">
      {/* Ober Logo */}
      <div className="mt-12 flex justify-center">
        <img src={logo} className="h-20" alt="" />
      </div>

      <nav className="flex-1 font-nunito mt-10">
        <ul className="space-y-2">
          <li>
            <NavLink
              to={"/admin/dashboard"}
              className="flex items-center px-8 py-4 hover:bg-[#1F2D16] hover:text-secondary"
            >
              <RxDashboard className="mr-3 text-2xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/users"}
              className="flex items-center px-8 py-4 hover:bg-[#1F2D16] hover:text-secondary"
            >
              <LuCircleUserRound className="mr-3 text-2xl" />
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/plant"}
              className="flex items-center px-8 py-4 hover:bg-[#1F2D16] hover:text-secondary"
            >
              <TbDiamond className="mr-3 text-2xl" />
              Plant Database
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/posts"}
              className="flex items-center px-8 py-4 hover:bg-[#1F2D16] hover:text-secondary"
            >
              <LuDumbbell className="text-xl mr-3 -rotate-45" />
              Post Management
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/admin/settings"}
              className="flex items-center px-8 py-4 hover:bg-[#1F2D16] hover:text-secondary"
            >
              <LuSettings className="mr-3 text-2xl" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to={"/login"}>
        <button
          onClick={handleLogout}
          className="flex items-center px-8 py-8 text-xl w-full mx-auto text-white"
        >
          <LogOut className="mr-3" />
          Logout
        </button>
      </Link>
    </div>
  );
}
