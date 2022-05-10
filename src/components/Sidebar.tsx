import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => console.log({ open }), [open]);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-[#215b73] h-screen p-5 pt-8 relative duration-300`}
      >
        <div className={`absolute cursor-pointer -right-3 top-9 border-2 rounded-full border-slate-50 text-slate-50 bg-[#215b73] ${!open && "invisible"} ${!open && "rotate-180"}`}>
          <AiOutlineArrowLeft
              className="w-7 h-7 m-1"
              onClick={() => setOpen(false)}
            />
        </div>
        <div className={`absolute cursor-pointer -right-3 top-9 bg-[#215b73] border-slate-50 text-slate-50 border-2 rounded-full ${open && "invisible"} ${open && "rotate-180"}`}>
          <AiOutlineArrowRight
          className="w-7 h-7 m-1"
            onClick={() => setOpen(true)}
          />
        </div>

        <div className="flex gap-x-4 items-center">
          <ul className="pt-6 py-4 w-full">
            <li className="my-10 mb-6 flex rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] text-slate-50 text-2xl font-semibold tracking-wider items-center gap-x-4">
              {open && (
                <div className="flex gap-4">
                  <FaUser className="text-3xl" />
                  Users
                </div>
              )}
            </li>
            <li className="mb-6 flex rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] text-slate-50 text-2xl font-semibold tracking-wider items-center gap-x-4">
              {open && (
                <div className="flex gap-4">
                  <MdGroup className="text-3xl" />
                  Groups
                </div>
              )}
            </li>
            <li className="mb-6 flex rounded-md w-full p-2 cursor-pointer hover:bg-[#50b2bf] text-slate-50 text-2xl font-semibold tracking-wider items-center gap-x-4">
              {open && (
                <div className="flex gap-4">
                  <TiMessages className="text-3xl" />
                  Messages
                </div>
              )}
            </li>
            <li className="mb-6 flex rounded-md p-2 cursor-pointer hover:bg-[#50b2bf] text-slate-50 text-2xl font-semibold tracking-wider items-center gap-x-4">
              {open && (
                <div className="flex gap-4">
                  <VscGraphLine className="text-3xl" />
                  Graph
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
