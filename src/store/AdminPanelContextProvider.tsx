import { ReactNode } from "react";
import { useState } from "react";
import { FC } from "react";
import AdminPanelContext, { AdminPanelContextType } from "./AdminPanelContext";
import Company from '../entities/Company';
import User from '../entities/User';
import { Group } from '../entities/Group';

const AdminPanelContextProvider:FC<{ children: ReactNode}> = ({ children }) => {

    const [sidebarOpened, setSidebarOpened] = useState<boolean>(false)
    const [companyId, setCompanyId] = useState<number>(2);
    const [company, setCompany] = useState<Company>();
    const [companyUsers, setCompanyUsers] = useState<User[]>();
    const [companyGroups, setCompanyGroups] = useState<Group[]>();

    const sidebarHandler = (open:boolean) => setSidebarOpened(open)
    const companyIdHandler = (id: number) => setCompanyId(id)
    const companyHandler = (company: Company) => setCompany(company)
    const companyUsersHandler = (users: User[]) => setCompanyUsers(users)
    const companyGroupsHandler = (groups: Group[]) => setCompanyGroups(groups)

    const contextValue: AdminPanelContextType = {
        sidebarOpened: sidebarOpened,
        companyId: companyId,
        company: company,
        companyUsers: companyUsers,
        companyGroups: companyGroups,
        sidebarHandler: sidebarHandler,
        companyIdHandler: companyIdHandler,
        companyHandler: companyHandler,
        companyUsersHandler: companyUsersHandler,
        companyGroupsHandler: companyGroupsHandler,
    }
    return (
        <AdminPanelContext.Provider value={contextValue}>
            {children}
        </AdminPanelContext.Provider>
    )
}
export default AdminPanelContextProvider