import { FC } from "react"
import { User } from "../entities/User"
import { MdDelete } from "react-icons/md"
import Pictograma from '../assets/Pictograma.svg'

const UserItem:FC<{ user: User }> = ({ user }) => {
    return (
        <li key={user.id} className="p-1 mb-1 flex justify-between items-center rounded-xl border-[1px] border-gray-300 bg-gray-100 shadow-sm text-base">
            <div className="border-[2px] border-gray-500 rounded-full p-2 ml-2">
                <img src={Pictograma} width="40px" height="40px" />
            </div>
            <div className="flex-col sm:flex-row justify-center text-center">
                <p className="text-base sm:text-lg font-bold italic">{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div>
                <MdDelete className="text-red-600 text-xl mt-[66px] mr-2"/>
            </div>
        </li>
    )
}
export default UserItem