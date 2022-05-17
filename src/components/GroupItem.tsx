import { FC } from "react";
import { Group } from "../entities/Group";
import Pictograma from "../assets/Pictograma.svg";
import { HiPencil } from "react-icons/hi";
import { MdDelete, MdOutlineDetails, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const GroupItem: FC<{ group: Group, onDetails:(group: Group) => void }> = ({ group, onDetails }) => {
  const groupDetailsHandler = () => {
    onDetails(group)
  }
  return (
    <li
      key={group.id}
      className="max-h-[130px] md:max-h-[180px] px-1 py-2 md:py-8 my-2 mx-2 rounded-xl border-[1px] border-gray-300 bg-gray-50 shadow-md text-base"
    >
      <div className="flex justify-between md:justify-around mx-3">
        <div className="border-[2px] border-gray-300 rounded-2xl w-[80px] h-[80px] flex justify-center">
          <img src={Pictograma} width="50px" height="50px" />
        </div>
        <div className="flex-col items-center gap-1 sm:gap-6">
          <div className="flex-col sm:flex-row justify-center text-center">
            <p className="text-base sm:text-lg font-bold italic">
              {group.name}
            </p>
            <p>{group.type}</p>
          </div>
          <div className="flex justify-end py-2 md:py-8 pr-2">
            <Link to={`/admin/groups/${group.id}`}>
              <MdSettings className="mr-4 text-xl cursor-pointer" onClick={groupDetailsHandler} />
            </Link>
            {/* <HiPencil className="text-gray-800 cursor-pointer text-xl mr-4" /> */}
            <MdDelete className="text-red-600 cursor-pointer text-xl mr-0" />
          </div>
        </div>
      </div>
    </li>
  );
};
export default GroupItem;
