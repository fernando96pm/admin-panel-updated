import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <MdMenu
          className={`absolute cursor-pointer -right-3 top-9 w-9 h-9 border-dark-purple
        border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <ul className="pt-6">
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">Uno</li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">Dos</li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">Tres</li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">Cuatro</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
