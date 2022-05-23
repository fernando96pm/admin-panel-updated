import { FC } from "react"
import { User } from "../entities/User"
import Pictograma from '../assets/Pictograma.svg'
import { MdDelete } from "react-icons/md"

const Member:FC<{ user: User }> = ({ user }) => {
    return (
        <div className="py-2 sm:py-4 my-2 flex justify-between items-center rounded-xl border-[1px] bg-gray-50 border-gray-300  shadow-md text-base">
            <div className="border-[2px] border-gray-200 rounded-2xl p-2 ml-2">
                <img src={Pictograma} width="40px" height="40px" />
            </div>
            <div className="flex-col sm:flex-row justify-center text-center">
                <p className="text-base sm:text-lg font-bold italic">{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div>
                <MdDelete className="text-red-600 text-xl mr-2"/>
                <div className="form-check form-switch">
                    <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                  </div>
            </div>
        </div>
    )
}
export default Member