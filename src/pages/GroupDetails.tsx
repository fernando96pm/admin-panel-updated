import { FC } from "react";
import { Group } from "../entities/Group";
import { User } from "../entities/User";
import Pictograma from '../assets/Pictograma.svg'
import Member from "../components/Member";

const GroupDetails:FC<{ group: Group }> = ({ group }) => {

    return (
        <div className="items-center w-full px-3 flex-col">
            <div className="flex justify-around max-w-sm bg-gray-100 mx-auto rounded-lg mt-3 p-4">
                <div className="p-2 border-gray-300 rounded-2xl border-2">
                    <img src={Pictograma} width="90px" height="90px"/>   
                </div>
                <div className="flex-col items-center gap-5 ">
                    <p className="text-2xl font-semibold italic text-gray-800">{group.name}</p>
                    <p className="text-xl font-normal">{group.type}</p>
                </div>                
            </div>
            <div className="flex-col mt-4 max-w-lg mx-auto bg-gray-100 rounded-lg">
                <h2 className="text-center text-xl font-bold ">Members</h2>
                <ul className="p-2">
                    {group.members?.map((member:User) => <Member user={member}/>)}
                </ul>
            </div>
        </div>
    )

}
export default GroupDetails