import UserItem from "../components/UserItem";
import UserDummy from "../entities/UserDummy";
import { MdSearch } from "react-icons/md";
import { useContext } from 'react';
import AdminPanelContext from '../store/AdminPanelContext';

const Users = () => {

  const ctx = useContext(AdminPanelContext)


  return (
    <div className="mx-3 md:mx-auto p-2">
      <h2
        className={`text-3xl text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto mt-3`}
      >
        Users
      </h2>
      <div className="py-4 justify-center flex-col">
        <div
          className={`flex justify-center h-[36px] min-w-[150px] mx-auto my-2`}
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
        <div
          className={`flex-col p-2 bg-gray-100 rounded-lg shadow-xl mx-auto max-w-[500px] sm:w-[500px] lg:w-[500px]`}
        >
          <div className={`flex-col justify-center`}>
            {ctx.dummyUsers?.map((u) => (
              <UserItem user={u} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
