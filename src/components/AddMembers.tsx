import { FC, useState, useEffect, useContext } from "react";
import Modal from "../ui/Modal";
import User from "../entities/User";
import Pictograma from "../assets/Pictograma.svg";
import { MdPersonAdd, MdPersonAddDisabled } from "react-icons/md";
import { GrClose } from "react-icons/gr";

import PerfilUno from "../assets/profile/perfil-1.png";
import PerfilDos from "../assets/profile/perfil-2.png";
import PerfilTres from "../assets/profile/perfil-3.png";
import PerfilCuatro from "../assets/profile/perfil-4.png";
import AdminPanelContext from "../store/AdminPanelContext";
import { Group } from "../entities/Group";

const DUMMY_ADD_MEMBERS: User[] = [
  new User(1, "Fernando", "fernando@mail.com", PerfilUno),
  new User(2, "Jose", "jose@mail.com", PerfilDos),
  new User(3, "Rubén", "ruben@mail.com", PerfilTres),
  new User(4, "Juan", "juan@mail.com", PerfilCuatro),
];

const AddMembersItem: FC<{
  user: User;
  membersHandler: (id: number) => void;
}> = ({ user, membersHandler }) => {
  const [addedMember, setAddedMember] = useState<boolean>(false);
  const addedMemberHandler = () => {
    setAddedMember(!addedMember);
    membersHandler(user.id);
  };
  return (
    <li
      key={user.id}
      className="bg-gray-50 flex justify-between p-3 mx-3 my-2 border border-gray-300 rounded-md"
    >
      <div className="border-[2px] border-gray-200 rounded-2xl p-2 ml-2">
        <img src={user.image} width="40px" height="40px" />
      </div>
      <div className="text-center">
        <p className="font-bold text-lg">{user.name}</p>
        <p className="mt-3">{user.email}</p>
      </div>
      <div>
        {addedMember ? (
          <MdPersonAddDisabled
            onClick={addedMemberHandler}
            className="text-2xl text-red-500 mt-6 cursor-pointer"
          />
        ) : (
          <MdPersonAdd
            onClick={addedMemberHandler}
            className="text-2xl text-green-500 mt-6 cursor-pointer"
          />
        )}
      </div>
    </li>
  );
};
const AddMembers: FC<{
  onClose: () => void;
  onAddMembers: (memberIds: number[]) => void;
  group: Group | undefined;
}> = ({ onClose, onAddMembers, group }) => {
  const ctx = useContext(AdminPanelContext);

  const [addedMembers, setAddedMembers] = useState<number[]>();

  let users:User[] = []

  useEffect(() => {
    if(group !== undefined){
      let isMember = false
      let filteredUsers = ctx.companyUsers!.filter(user => {
        isMember = false
        group.members?.forEach(member => {
          if(user.id === member.id) {
            isMember = true
          }
        })
        if(!isMember){
          return user;
        }
      })
      users = filteredUsers;
    } else {
      users = ctx.companyUsers!
    }
  }, [])

  const membersHandler = (id: number) => {
    let membersUpdated: number[];
    if (addedMembers?.includes(id)) {
      membersUpdated = addedMembers.filter((x) => x !== id);
      setAddedMembers(membersUpdated);
    } else {
      setAddedMembers((prevState) => {
        return [...(prevState ?? []), id];
      });
    }
    console.log({ addedMembers });
  };

  const confirmMembersAdded = () => {
    onClose();
  };

  useEffect(() => {
    onAddMembers(addedMembers!);
  }, [addedMembers]);

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-end">
        <GrClose
          className="text-xl font-medium cursor-pointer"
          onClick={onClose}
        />
      </div>
      <h3 className="text-2xl text-center font-semibold mb-3">Users</h3>
      <div className="flex justify-center">
        <div className="w-[100%] bg-gray-400 h-[1px]" />
      </div>
      <div>
        <ul className="m-0 p-0 max-h-80 overflow-auto bg-gray-200">
          {users?.map((u) => (
            <AddMembersItem user={u} membersHandler={membersHandler} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="w-[100%] bg-gray-400 h-[1px]" />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={confirmMembersAdded}
          className="bg-cyan-700 rounded-md text-slate-50 font-base tracking-wider text-lg px-6 py-1 hover:bg-cyan-800 hover:shadow-md "
        >
          Add
        </button>
      </div>
    </Modal>
  );
};
export default AddMembers;
