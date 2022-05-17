import UserItem from "../components/UserItem";
import { User } from "../entities/User";
import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { MdFirstPage, MdLastPage, MdArrowBack, MdArrowForward } from "react-icons/md";
import { useState, useEffect } from "react";
import AdminPanelContext from "../store/AdminPanelContext";
import { Group } from "../entities/Group";
import GroupItem from "../components/GroupItem";
import { FC } from "react";


const membersTeralco:User[] = [
  new User(1, "Fernando", "fernando@mail.com", undefined),
  new User(2, "Jose", "jose@mail.com", undefined),
  new User(3, "Rubén", "ruben@mail.com", undefined),
]
const DUMMY_GROUPS:Group[] = [
    new Group(1, "Crysec", "normal", undefined),
    new Group(2, "Devcenter", "difusión", undefined),
    new Group(3, "Teralco", "difusión", membersTeralco),
    new Group(4, "1 DAM", "normal", undefined),
    new Group(5, "2 DAM", "normal", undefined),
    new Group(6, "React", "difusión", undefined),
    new Group(7, "Paco mollá", "normal", undefined),
    new Group(8, "Crycast", "difusión", undefined),
]
const Groups:FC<{ onDetails: (group: Group) => void}> = ({ onDetails }) => {
    const ctx = useContext(AdminPanelContext);
  // Gestión de paginación
  const step = 6;
  const [items, setItems] = useState<Group[]>(DUMMY_GROUPS.slice(0, step));
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

    for (i = 0, j = 0; i < DUMMY_GROUPS.length; i++, j++) {
      if (j === step) {
        indexPage++;
        j = 0;
      }
      if (step > DUMMY_GROUPS.length - i) {
        setCurrent(i);
        break;
      }
    }
    setPage(indexPage);
  };

  // Evalúa el número de items a mostrar en la última página.
  useEffect(() => {
    let endPosition: number = current + step;
    if (endPosition >= DUMMY_GROUPS.length) {
      setIsLastPage(true);
      setItems(DUMMY_GROUPS.slice(current - step, DUMMY_GROUPS.length - 1));
      setItems(DUMMY_GROUPS.slice(current - step, DUMMY_GROUPS.length - 1));
    }
    setItems(DUMMY_GROUPS.slice(current, endPosition));
  }, [current, DUMMY_GROUPS]);

  return (
    <div className="mx-3 md:mx-auto p-2">
      <h1
        className={`text-3xl text-gray-700 font-medium tracking-wider text-center lg:text-center mx-auto mt-2`}
      >
        Groups
      </h1>
      <div className="pt-2 justify-center flex-col">
        <div
          className={`flex justify-center h-[36px] min-w-[150px] mx-auto my-2 `}>
          <input
            type="text"
            className="px-4 py-2 w-65"
            placeholder="Search..."
          />
          <button className="flex items-center justify-center bg-slate-50 px-4 border-l">
            <MdSearch className="text-base" />
          </button>
        </div>
        <div className={`flex-col bg-gray-100 rounded-lg shadow-xl mx-auto max-h-[800px] sm:max-h-[950px] sm:mx-auto mb:3 py-1 max-w-[600px] sm:w-[500px] lg:w-[600px] mb-2`}>
          <ul
            className={`grid grid-cols-1 md:grid-cols-2 justify-center`}
          >
            {items.map((g) => (
              <GroupItem group={g} onDetails={onDetails}/>
            ))}
          </ul>
          <div className="font-semibold flex justify-center gap-4 mt-2">
          <button
            className={`${isFirstPage && 'text-gray-500 cursor-not-allowed'}`}
            disabled={isFirstPage}
            onClick={firstPage}
          >
            <MdFirstPage className="text-2xl font-bold" />
          </button>
          <button
            className={`${isFirstPage && 'text-gray-500 cursor-not-allowed'}`}
            disabled={isFirstPage}
            onClick={previousPage}
          >
            <MdArrowBack className="text-xl font-bold"/>
          </button>
          <button
            className={`${isLastPage && 'text-gray-500 cursor-not-allowed'}`}
            disabled={isLastPage}
            onClick={nextPage}
          >
            <MdArrowForward className="text-xl font-bold"/>
            
          </button>
          <button
            className={`${isLastPage && 'text-gray-500 cursor-not-allowed'}`}
            disabled={isLastPage}
            onClick={lastPage}
          >
            <MdLastPage className="text-2xl font-bold"/>
          </button>
        </div>
          <p className="text-lg text-center mb-3 font-semibold text-gray-700">{page}</p>
        </div>
      </div>
    </div>
  );
}
export default Groups