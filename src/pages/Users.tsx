import UserItem from "../components/UserItem";
import { User } from "../entities/User";
import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { MdFirstPage, MdLastPage, MdArrowBack, MdArrowForward } from "react-icons/md";
import AdminPanelContext from "../store/AdminPanelContext";
const DUMMY_USERS: User[] = [
  new User(1, "Fernando", "fernando@mail.com", undefined),
  new User(2, "Jose", "jose@mail.com", undefined),
  new User(3, "Rubén", "ruben@mail.com", undefined),
  new User(4, "Juan", "juan@mail.com", undefined),
  new User(5, "Fernando", "fernando@mail.com", undefined),
  new User(6, "Jose", "jose@mail.com", undefined),
//   new User(7, "Rubén", "ruben@mail.com", undefined),
//   new User(8, "Juan", "juan@mail.com", undefined),
//   new User(9, "Fernando", "fernando@mail.com", undefined),
//   new User(10, "Jose", "jose@mail.com", undefined),
//   new User(11, "Rubén", "ruben@mail.com", undefined),
//   new User(12, "Juan", "juan@mail.com", undefined),
];
const Users = () => {
  const ctx = useContext(AdminPanelContext);

  return (
    <div className="flex flex-col w-screen flex-1 h-screen min-h-screen bg-gradient-to-b from-[#c5c5c5] to-[#929292]">
      <h1
        className={`text-3xl text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto mt-2`}
      >
        Users
      </h1>
      <div className="pt-2 h-screen min-h-screen justify-center flex-col">
        <div
          className={`flex justify-center h-[36px] min-w-[150px] mx-auto my-2 ${
            ctx.sidebarOpened && "mr-auto md:mr-64 lg:mr-auto"
          }`}
        >
          <input
            type="text"
            className="px-4 py-2 w-80"
            placeholder="Search..."
          />
          <button className="flex items-center justify-center bg-slate-50 px-4 border-l">
            <MdSearch className="text-base" />
          </button>
        </div>
        <div className={`flex-col bg-gray-50 rounded-lg shadow-xl mx-3 sm:mx-auto mb:3 py-1 px-3 max-w-[600px] sm:w-[500px] lg:w-[600px] ${
              ctx.sidebarOpened && "mr-auto md:mr-80 lg:mr-auto"
            }`}>
          <ul
            className={`flex-col justify-center`}
          >
            {DUMMY_USERS.map((u) => (
              <UserItem user={u} />
            ))}
          </ul>
          <div className="font-semibold flex justify-center gap-4 py-2">
          <button
            className="page-button"
            // disabled={isFirstPage}
            // onClick={firstPage}
          >
            <MdFirstPage className="text-2xl font-bold" />
          </button>
          <button
            className="page-button"
            // disabled={isFirstPage}
            // onClick={previousPage}
          >
            <MdArrowBack className="text-xl font-bold"/>
          </button>
          <button
            className="page-button"
            // disabled={isLastPage}
            // onClick={nextPage}
          >
            <MdArrowForward className="text-xl font-bold"/>
            
          </button>
          <button
            className="page-button"
            // disabled={isLastPage}
            // onClick={lastPage}
          >
            <MdLastPage className="text-2xl font-bold"/>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
