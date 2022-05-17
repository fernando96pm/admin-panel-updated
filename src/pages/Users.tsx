import UserItem from "../components/UserItem";
import { User } from "../entities/User";
import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import {
  MdFirstPage,
  MdLastPage,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import { useState, useEffect } from "react";
import AdminPanelContext from "../store/AdminPanelContext";
const DUMMY_USERS: User[] = [
  new User(1, "Fernando", "fernando@mail.com", undefined),
  new User(2, "Jose", "jose@mail.com", undefined),
  new User(3, "Rubén", "ruben@mail.com", undefined),
  new User(4, "Juan", "juan@mail.com", undefined),
  new User(5, "Fernando", "fernando@mail.com", undefined),
  new User(6, "Jose", "jose@mail.com", undefined),
  new User(7, "Rubén", "ruben@mail.com", undefined),
  new User(8, "Juan", "juan@mail.com", undefined),
  new User(9, "Fernando", "fernando@mail.com", undefined),
  new User(10, "Jose", "jose@mail.com", undefined),
  new User(11, "Rubén", "ruben@mail.com", undefined),
  new User(12, "Juan", "juan@mail.com", undefined),
];
const Users = () => {
  const ctx = useContext(AdminPanelContext);
  // Gestión de paginación
  const step = 6;
  const [items, setItems] = useState<User[]>(DUMMY_USERS.slice(0, step));
  const [current, setCurrent] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const isFirstPage = page === 1;

  const nextPage = () => {
    setCurrent((prevPosition) => (prevPosition += step));
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };
  const previousPage = () => {
    setIsLastPage(false);
    let startPosition: number = current - step;
    if (startPosition < 0) {
      return;
    }
    setCurrent(startPosition);
    setPage((prevPage) => {
      return prevPage - 1;
    });
  };
  const firstPage = () => {
    setCurrent(0);
    setPage(1);
    setIsLastPage(false);
  };
  const lastPage = () => {
    setIsLastPage(true);
    let i: number,
      j: number,
      indexPage: number = 0;

    for (i = 0, j = 0; i < DUMMY_USERS.length; i++, j++) {
      if (j === step) {
        indexPage++;
        j = 0;
      }
      if (step > DUMMY_USERS.length - i) {
        setCurrent(i);
        break;
      }
    }
    setPage(indexPage);
  };

  // Evalúa el número de items a mostrar en la última página.
  useEffect(() => {
    let endPosition: number = current + step;
    if (endPosition >= DUMMY_USERS.length) {
      setIsLastPage(true);
      setItems(DUMMY_USERS.slice(current - step, DUMMY_USERS.length - 1));
      setItems(DUMMY_USERS.slice(current - step, DUMMY_USERS.length - 1));
    }
    setItems(DUMMY_USERS.slice(current, endPosition));
  }, [current, DUMMY_USERS]);

  return (
    <div className="mx-3 md:mx-auto p-2">
      <h1
        className={`text-3xl text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto mt-2`}
      >
        Users
      </h1>
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
          className={`flex-col p-2 bg-gray-100 rounded-lg shadow-xl mx-auto max-h-[700px] sm:max-h-[1050px] max-w-[600px] sm:w-[500px] lg:w-[600px]`}
        >
          <div className={`flex-col justify-center`}>
            {items.map((u) => (
              <UserItem user={u} />
            ))}
          </div>
          <div className="font-semibold mt-3 flex justify-center gap-4">
            <button
              className={`${isFirstPage && "text-gray-500 cursor-not-allowed"}`}
              disabled={isFirstPage}
              onClick={firstPage}
            >
              <MdFirstPage className="text-2xl font-bold" />
            </button>
            <button
              className={`${isFirstPage && "text-gray-500 cursor-not-allowed"}`}
              disabled={isFirstPage}
              onClick={previousPage}
            >
              <MdArrowBack className="text-xl font-bold" />
            </button>
            <button
              className={`${isLastPage && "text-gray-500 cursor-not-allowed"}`}
              disabled={isLastPage}
              onClick={nextPage}
            >
              <MdArrowForward className="text-xl font-bold" />
            </button>
            <button
              className={`${isLastPage && "text-gray-500 cursor-not-allowed"}`}
              disabled={isLastPage}
              onClick={lastPage}
            >
              <MdLastPage className="text-2xl font-bold" />
            </button>
          </div>
          <p className="text-lg text-center mb-2 font-semibold text-gray-700">
            {page}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Users;
