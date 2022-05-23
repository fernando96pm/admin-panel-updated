import { FC } from "react";
import { Group } from "../entities/Group";
import { User } from "../entities/User";
import Pictograma from "../assets/Pictograma.svg";
import Member from "../components/Member";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineAddAPhoto } from 'react-icons/md'

const GroupDetails: FC<{ group: Group }> = ({ group }) => {
  return (
    <div className="items-center w-full px-3 flex-col pt-3">
      <div className="bg-slate-100 mx-auto flex-col max-w-lg rounded-md shadow-xl">
        <div className="flex justify-around max-w-sm bg-slate-100 mx-auto rounded-lg mt-3 p-4">
          <div className="flex-col">
            <div className="flex-col p-1 border-gray-300 rounded-2xl border-2">
              <img src={Pictograma} width="90px" height="90px" />
            </div>
            <div className="flex justify-center pt-1">
              <MdOutlineAddAPhoto className="text-2xl text-cyan-800 cursor-pointer mt-2" />
            </div>
          </div>
          <div className="flex-col">
            <div className="flex mt-4">
              <p className="text-2xl font-semibold italic text-gray-700">
                {group.name}
              </p>
              <HiOutlinePencilAlt className="text-2xl text-cyan-800 ml-3 mt-1 cursor-pointer" />
            </div>
            <div className="flex mt-8">
              <p className="text-xl text-gray-700 font-normal">{group.type}</p>
              <HiOutlinePencilAlt className="text-2xl text-cyan-800 ml-3 mt-1 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[99%] bg-gray-400 h-[1px]" />
        </div>
        <h2 className="text-center text-xl font-semibold tracking-wider p-2 bg-slate-300">Members</h2>
        <div className="flex justify-center">
          <div className="w-[100%] bg-gray-400 h-[1px]" />
        </div>
        <div className="flex-col max-w-lg mx-auto bg-slate-500 rounded-md rounded-t-none">
          <ul className="p-2">
            {group.members?.map((member: User) => (
              <Member user={member} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default GroupDetails;
