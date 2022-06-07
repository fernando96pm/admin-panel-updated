import { ChangeEvent, FC, useState, FormEvent, useContext } from 'react';
import { MdGroup } from "react-icons/md";
import Modal from "../ui/Modal";
import { GrClose } from "react-icons/gr";
import AddMembers from "./AddMembers";
import AdminPanelContext from '../store/AdminPanelContext';
import useHttp from '../hooks/use-http';

type GroupDto = {
  name: string,
  type: string,
  members: number[],
  companyId: number
}

const NewGroup: FC<{ onShow: (show: boolean) => void }> = ({ onShow }) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [membersId, setMembersId] = useState<number[]>([]);
  const [showAddMembers, setShowAddMembers] = useState<boolean>(false);

  const { groupsHandler } = useHttp();

  const ctx = useContext(AdminPanelContext)
  let nameIsValid = name.trim().length > 0

  const nameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const typeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };
  const addMembersHandler = (ids: number[]) => {
    setMembersId(ids);
  }

  const showAddMembersHandler = () => {
    setShowAddMembers(!showAddMembers);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const createGroupRequest = async() => {
    const groupDto: GroupDto = {
      name: name,
      type: type,
      members: membersId,
      companyId: ctx.companyId!
    }
    const response = await fetch(`http://localhost:8080/groups`, {
      method: 'POST',
      body: JSON.stringify(groupDto),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    onShow(false);
    groupsHandler();
  } 
  return (
    <>
      {showAddMembers && <AddMembers onClose={showAddMembersHandler} onAddMembers={addMembersHandler} group={undefined}/>}

      <Modal onClose={() => onShow(false)}>
        <div className="">
          <div className="flex justify-end">
            <GrClose
              className="text-xl font-medium cursor-pointer"
              onClick={() => onShow(false)}
            />
          </div>
          <form onSubmit={formSubmitHandler}>
            <div className="flex-col p-2">
              <h3 className="text-xl text-center font-semibold mb-3">
                New Group
              </h3>
              <div className="flex justify-center">
                <div className="w-[100%] bg-gray-400 h-[1px]" />
              </div>
              <div className="my-5 flex-col">
                <div className="flex-col my-3">
                  <label htmlFor="name" className="text-lg font-medium mr-4">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    className={
                      "border border-gray-300 rounded py-2 px-3 w-full focus:border-none focus:outline-[#00d4ff] focus:shadow-md focus:bg-[#e3faff]"
                    }
                  />
                </div>
                <div className="flex-col ">
                  <select
                    id="type"
                    onChange={typeHandler}
                    className="mt-3 font-medium text-lg "
                  >
                    <option value="Normal">Normal</option>
                    <option value="Difusión">Difusión</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={showAddMembersHandler} className="bg-slate-50 border border-gray-400 flex gap-3 px-5 py-1 rounded-md mb-5 hover:outline-[#00d4ff] hover:shadow-md hover:bg-[#e3faff]">
                  Add members
                  <MdGroup className="text-2xl text-green-700" />
                </button>
              </div>
              <div className="flex justify-center">
                <button disabled={!nameIsValid} onClick={createGroupRequest} className="bg-cyan-700 rounded-md text-slate-50 font-base tracking-wider text-lg px-6 py-1 hover:bg-cyan-800 hover:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default NewGroup;
