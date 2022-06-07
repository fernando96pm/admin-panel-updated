import { Link } from "react-router-dom";
import { useContext } from "react";
import AdminPanelContext from "../store/AdminPanelContext";
import { FC } from "react";
import { NavigationLink } from "../shared/interfaces/navigation.interface";

const Sidebar: FC<{ props: Array<NavigationLink> }> = ({ props }) => {
  const ctx = useContext(AdminPanelContext);

  const routerLinks = props.map((nav: NavigationLink) => {
    return (
      <Link to={nav.path}>
        <li className={`my-1 md:my-6 mb-1 md:mb-6 flex justify-start rounded-md p-2 ${ctx.sidebarOpened && 'cursor-pointer hover:bg-[#50b2bf]'} items-center`}>
          {ctx.sidebarOpened && (
            <>
              <div className="text-slate-50 text-3xl mt-1 ml-4 mr-10">{nav.icon}</div>
              <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                {nav.name}
              </p>
            </>
          )}
        </li>
      </Link>
    );
  });

  return (
    <div
      className={`flex gap-x-4 items-center ${
        ctx.sidebarOpened ? "md:w-64 md:min-w-64" : "md:w-20 min-w-64"
      }`}
    >
      <ul className="pt-4 py-4 w-full">{routerLinks}</ul>
    </div>
  );
};
export default Sidebar;
