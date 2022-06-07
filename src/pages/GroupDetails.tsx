import { FC, useState, useEffect } from 'react';
import { Group } from "../entities/Group";
import Pictograma from "../assets/Pictograma.svg";
import Member from "../components/Member";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineAddAPhoto, MdPersonAdd } from "react-icons/md";
import MemberData from "../entities/MemberData";
import AddMembers from "../components/AddMembers";
import User from "../entities/User";
import { CrysecUserType } from "../utils/response-types";

const GroupDetails: FC<{ group: Group }> = ({ group }) => {
  const url = `http://localhost:8080/groups/${group.id}`;
  const [showAddMembers, setShowAddMembers] = useState<boolean>(false);

  const [groupMembers, setGroupMembers] = useState<MemberData[]>([]);

  const showAddMembersHandler = () => setShowAddMembers(!showAddMembers);

  const getGroupMembers = async () => {
    let response = await fetch(`${url}/members`);
    let data: CrysecUserType[] = await response.json();
    const members = data.map((u) => new User(u.id, u.name, u.email, undefined));
    response = await fetch(`${url}/admins`);
    data = await response.json();
    const admins = data.map((u) => new User(u.id, u.name, u.email, undefined));
    setMemberData(members, admins);
  };

  const setMemberData = (members: User[], admins: User[]) => {
    let groupMembers: MemberData[] = [];
    members.forEach((member) => {
      let isAdmin = false;
      admins.forEach(admin => {
        if(member.id === admin.id){
          isAdmin = true;
        }
      })
      groupMembers.push(
        new MemberData(member.id, member.name, member.email, undefined, isAdmin)
      );
    });
    setGroupMembers(groupMembers)
    console.log(groupMembers)
  };
  const addMembersHandler = (ids: number[]) => {
    
  }
  useEffect(() => {
    getGroupMembers();
  }, []);

  return (
    <>
      {showAddMembers && <AddMembers onClose={showAddMembersHandler} onAddMembers={addMembersHandler} group={group}/>}
      <div className="items-center w-full px-3 flex-col pt-3">
        <div className="bg-slate-100 mx-auto flex-col max-w-lg rounded-md shadow-xl">
          <div className="flex justify-around max-w-sm bg-slate-100 mx-auto rounded-lg mt-3 p-4">
            <div className="flex-col">
              <div className="flex-col p-1 border-gray-300 rounded-2xl border-2">
                <img src={group.url_image} width="90px" height="90px" />
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
                <p className="text-xl text-gray-700 font-normal">
                  {group.type}
                </p>
                <HiOutlinePencilAlt className="text-2xl text-cyan-800 ml-3 mt-1 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[95%] bg-gray-400 h-[1px]" />
          </div>
          <div className="flex-col max-w-lg mx-auto bg-gray-100 rounded-md rounded-t-none">
            <div className="flex justify-between mt-3">
              <span />
              <h2
                className="ml-10 text-center text-gray-800 text-xl font-semibold tracking-wider
          bg-gray-100"
              >
                Members
              </h2>
              <button className="mr-4" onClick={showAddMembersHandler}>
                <MdPersonAdd className="text-3xl text-cyan-700 cursor-pointer hover:text-cyan-900" />
              </button>
            </div>
            <ul className="p-2 mb-4">
              {groupMembers?.map((member: MemberData) => (
                <Member member={member} groupId={group.id}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default GroupDetails;
