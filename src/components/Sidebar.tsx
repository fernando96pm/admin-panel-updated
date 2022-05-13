import { FaUser } from "react-icons/fa";
import { MdHome, MdMenu } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { useEffect, useState } from "react";
import { VscGraphLine } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AdminPanelContext from "../store/AdminPanelContext";
import Pictograma from "../assets/Pictograma.svg";
import { FC } from "react";
import { ReactNode } from "react";

const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
  const ctx = useContext(AdminPanelContext);

  return (
    <div className="flex-col">
      <div
          className={`absolute cursor-pointer top-3 left-5  ${
            !ctx.sidebarOpened && "invisible"
          }`}
        >
          <AiOutlineArrowLeft
            className="w-7 h-7 m-1"
            onClick={() => ctx.sidebarHandler(false)}
          />
        </div>
        <div
          className={`absolute cursor-pointer top-3 left-5 ${
            ctx.sidebarOpened && "invisible"
          }`}
        >
          <MdMenu
            className="w-7 h-7 m-1"
            onClick={() => ctx.sidebarHandler(true)}
          />
        </div>
      <header
        className={`w-full bg-gray-100 flex flex-nowrap justify-end items-center gap-3 max-h-16 h-16 p-3 shadow-xl z-0`}
      >
        

        <h1
          className={`text-[28px] font-semibold tracking-wider text-gray-700`}
        >
          Admin panel
        </h1>
        <img src={Pictograma} width="45px" height="45px" className="mr-5"/>
      </header>
      <div className="md:flex h-screen">
        <div
          className={`${
            ctx.sidebarOpened ? "h-80 md:w-72 md:min-w-72" : "p-0 pt-0 h-0 md:w-20 min-w-20"
          } bg-gradient-to-b from-[#05090C] to-[#103240] md:p-5 md:pt-8 md:h-screen md:min-h-screen relative duration-300`}
        >
          <div className={`flex gap-x-4 items-center ${ctx.sidebarOpened ? "md:w-64 md:min-w-64" : "md:w-20 min-w-64"}`}>
            <ul className="pt-4 py-4 w-full">
              <Link to="/admin">
                <li className="my-1 md:my-10 mb-1 md:mb-6 flex justify-between rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] items-center">
                  {ctx.sidebarOpened && (
                    <>
                      <MdHome className="text-slate-50 text-3xl mt-1 ml-4" />
                      <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                        Home
                      </p>
                      <p> </p>
                    </>
                  )}
                </li>
              </Link>
              <Link to="/admin/users">
                <li className="mb:1 md:mb-6 flex justify-between rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] items-center">
                  {ctx.sidebarOpened && (
                    <>
                      <FaUser className="text-slate-50 text-3xl mt-1 ml-4" />
                      <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                        Users
                      </p>
                      <p></p>
                    </>
                  )}
                </li>
              </Link>
              <Link to="/admin/groups">
                <li className="mb-1 md:mb-6 flex justify-between rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] items-center">
                  {ctx.sidebarOpened && (
                    <>
                      <MdGroup className="text-slate-50 text-3xl mt-1 ml-4" />
                      <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                        Groups
                      </p>
                      <p></p>
                    </>
                  )}
                </li>
              </Link>
              <Link to="/admin/messages">
                <li className="mb-1 md:mb-6 flex justify-between rounded-md w-full p-2 cursor-pointer hover:bg-[#50b2bf] items-center">
                  {ctx.sidebarOpened && (
                    <>
                      <TiMessages className="text-slate-50 text-3xl mt-1 ml-4" />
                      <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                        Messages
                      </p>
                      <p></p>
                    </>
                  )}
                </li>
              </Link>
              <Link to="/admin/graph">
                <li className="mb-1 md:mb-6 flex justify justify-between rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] items-center">
                  {ctx.sidebarOpened && (
                    <>
                      <VscGraphLine className="text-slate-50 text-3xl mt-1 ml-4" />
                      <p className="text-slate-50 text-[26px] font-normal tracking-wider">
                        Graph
                      </p>
                      <p></p>
                    </>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex-1 h-screen">{children}</div>
      </div>
    </div>
  );
};
export default Sidebar;
