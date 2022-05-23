import { MdMenu } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import AdminPanelContext from "../store/AdminPanelContext";
import Pictograma from "../assets/Pictograma.svg";
import { FC } from "react";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { NAVIGATION_ROUTES } from "../shared/constants/constants";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const ctx = useContext(AdminPanelContext);

  return (
    <div className="flex-col">
      <header
        className={`z-10 w-full bg-gray-100 absolute top-0 h-[10%] p-3 shadow-2xl flex flex-nowrap justify-between items-center gap-3`}
      >
        <div className="cursor-pointer flex items-center justify-center">
          <div className={`${!ctx.sidebarOpened && "hidden"}`}>
            <AiOutlineArrowLeft
              className="w-7 h-7 m-1 "
              onClick={() => ctx.sidebarHandler(false)}
            />
          </div>
          <div className={`${ctx.sidebarOpened && "hidden"}`}>
            <MdMenu
              className="w-7 h-7 m-1 "
              onClick={() => ctx.sidebarHandler(true)}
            />
          </div>
        </div>
        <div className="flex justify-center align-center">
          <h1
            className={`text-[28px] mr-5 font-semibold tracking-wider text-gray-700`}
          >
            Admin panel
          </h1>
          <img
            src={Pictograma}
            width="45px"
            height="45px"
            className="mr-5"
            alt="admin"
          />
        </div>
      </header>
      <div className="md:flex h-screen pt-16">
        <div
          className={`${
            ctx.sidebarOpened
              ? "h-80 md:w-72 md:min-w-72"
              : "p-0 pt-0 h-0 md:w-20 min-w-20"
          } bg-gradient-to-b from-[#05090C] to-[#103240] md:p-5 md:pt-8 md:h-full relative duration-300`}
        >
          <Sidebar props={NAVIGATION_ROUTES}/>
        </div>
        <div className="flex-1 h-full overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
