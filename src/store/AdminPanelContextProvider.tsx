import { ReactNode } from "react";
import { useState } from "react";
import { FC } from "react";
import AdminPanelContext, { AdminPanelContextType } from "./AdminPanelContext";
import Company from '../entities/Company';
import User from '../entities/User';
import {Group} from '../entities/Group';
import UserDummy from "../entities/UserDummy";

const AdminPanelContextProvider:FC<{ children: ReactNode}> = ({ children }) => {

    const [sidebarOpened, setSidebarOpened] = useState<boolean>(false)
    const [companyId, setCompanyId] = useState<number>(2);
    const [company, setCompany] = useState<Company>();
    const [companyUsers, setCompanyUsers] = useState<User[]>();
    const [dummyUsers, setDummyUsers] = useState<UserDummy[]>([]);
    const [companyGroups, setCompanyGroups] = useState<Group[]>();

    const sidebarHandler = (open:boolean) => setSidebarOpened(open)
    const companyIdHandler = (id: number) => setCompanyId(id)
    const companyHandler = (company: Company) => setCompany(company)
    const companyUsersHandler = (users: User[]) => setCompanyUsers(users)
    const companyGroupsHandler = (groups: Group[]) => setCompanyGroups(groups)
    const dummyUsersHandler = (dummyUsers: UserDummy[]) => setDummyUsers(dummyUsers)
    const dummyUsersAddHandler = (dummyUser: UserDummy) => setDummyUsers(dummyUsers => [...dummyUsers, dummyUser])
    const dummyUsersEditHandler = (dummyUser: UserDummy) => {
        setDummyUsers(dummyUsers => {
            let users: UserDummy[] = [...dummyUsers];
            users[users.findIndex((user) => user.id == dummyUser.id)] = dummyUser;
            return users;
        });
    }

    const contextValue: AdminPanelContextType = {
        sidebarOpened,
        companyId,
        company,
        companyUsers,
        companyGroups,
        dummyUsers,
        sidebarHandler,
        companyIdHandler,
        companyHandler,
        companyUsersHandler,
        companyGroupsHandler,
        dummyUsersHandler,
        dummyUsersAddHandler,
        dummyUsersEditHandler
    }
    return (
        <AdminPanelContext.Provider value={contextValue}>
            {children}
        </AdminPanelContext.Provider>
    )
}
export default AdminPanelContextProvider