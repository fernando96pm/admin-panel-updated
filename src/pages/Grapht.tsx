import {useContext} from "react";
import AdminPanelContext from "../store/AdminPanelContext";

const Graph = () => {
    const ctx = useContext(AdminPanelContext);

    return (
        <div className="m-[7rem]">
            <ul>
                {ctx.dummyUsers?.map(user =>
                    <li>
                        {user.surname}
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Graph