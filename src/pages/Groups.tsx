import { MdSearch } from "react-icons/md";
import { Group } from '../entities/Group';
import GroupItem from "../components/GroupItem";
import { FC, useState, useContext, useEffect } from 'react';
import MemberData from "../entities/MemberData";
import NewGroup from "../components/NewGroup";
import CrysecLogo from '../assets/CrysecLogo.svg'
import PacoMolla from '../assets/profile/paco-mollá.png'
import Uno from '../assets/profile/1.png'
import Dos from '../assets/profile/2.png'
import PerfilSeis from "../assets/profile/perfil-6.png"
import PerfilSiete from "../assets/profile/perfil-7.png"
import PerfilOcho from "../assets/profile/perfil-8.png"
import AdminPanelContext from "../store/AdminPanelContext";

const membersDam: MemberData[] = [
  new MemberData(1, "Dani", "dani@mail.com", PerfilSeis, true),
  new MemberData(2, "Manu", "manu@mail.com", PerfilSiete, true),
  new MemberData(3, "Gerard", "gerard@mail.com", PerfilOcho, true),
  new MemberData(5, "Jose", "jose@mail.com", undefined, true),
  new MemberData(6, "Rubén", "ruben@mail.com", undefined, true),
  new MemberData(7, "Juan", "juan@mail.com", undefined, true),
];
const DUMMY_GROUPS: Group[] = [
  new Group(1, "Crysec", "normal", CrysecLogo, undefined),
  new Group(2, "1 DAM", "normal", Uno, undefined),
  new Group(3, "2 DAM", "normal", Dos, membersDam),
  new Group(4, "Paco mollá", "normal", PacoMolla, undefined),
  new Group(5, "Devcenter", "difusión", undefined, undefined),
  new Group(6, "Teralco", "difusión", undefined, undefined),
  new Group(7, "React", "difusión", undefined, undefined),
  new Group(8, "Crycast", "difusión", undefined, undefined),
];
const Groups: FC<{ onDetails: (group: Group) => void }> = ({ onDetails }) => {
  const ctx = useContext(AdminPanelContext)
  const [showNewGroup, setShowNewGroup] = useState<boolean>(false);
  const [groups, setGroups] = useState<Group[] | undefined>(ctx.companyGroups);

  const showNewGroupHandler = (show: boolean) => {
    setShowNewGroup(show);
  };

  useEffect(() => {
    setGroups(ctx.companyGroups);
  }, [ctx.companyGroups])
  return (
    <>
      {showNewGroup && <NewGroup onShow={showNewGroupHandler}/>}
      <div className="mx-3 md:mx-auto p-2">
        <h2
          className={`text-3xl text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto mt-4 mb-4`}
        >
          Groups
        </h2>
        <div className="pt-2 justify-center flex-col">
          <div className="flex-col justify-center">
            <div
              className={`flex justify-center h-[36px] min-w-[150px] mx-auto my-2 `}
            >
              <input
                type="text"
                className="px-4 py-2 w-65"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center bg-slate-50 px-4 border-l">
                <MdSearch className="text-base" />
              </button>
            </div>
            <div className="flex justify-center my-4">
              <button onClick={() => showNewGroupHandler(true)} className="bg-green-700 hover:bg-green-900 rounded-md text-slate-50 font-normal text-lg tracking-wider px-6 py-[2px]">
                New
              </button>
            </div>
          </div>
          <div
            className={`flex-col bg-gray-100 rounded-lg shadow-xl mx-auto sm:mx-auto mb:3 py-1 max-w-[600px] sm:w-[500px] lg:w-[600px] mb-2`}
          >
            <ul className={`grid grid-cols-1 md:grid-cols-2 justify-center`}>
              {groups?.map((g) => (
                <GroupItem group={g} onDetails={onDetails} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Groups;
