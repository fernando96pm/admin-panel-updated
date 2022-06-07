import { createContext } from "react";
import User from "../entities/User";
import Company from '../entities/Company';
import { Group } from "../entities/Group";

export type AdminPanelContextType = {
    sidebarOpened: boolean;
    companyId: number | undefined;
    company: Company | undefined;
    companyUsers: User[] | undefined;
    companyGroups: Group[] | undefined;
    sidebarHandler: (open: boolean) => void;
    companyIdHandler: (id: number) => void,
    companyHandler: (company: Company) => void;
    companyUsersHandler: (users: User[]) => void;
    companyGroupsHandler: (groups: Group[]) => void;
}
const AdminPanelContext = createContext<AdminPanelContextType>({
    sidebarOpened: false,
    companyId: undefined,
    company: undefined,
    companyUsers: undefined,
    companyGroups: undefined,
    sidebarHandler: (open: boolean) => {},
    companyIdHandler: (id: number) => {},
    companyHandler: (company: Company) => {},
    companyUsersHandler: (users: User[]) => {},
    companyGroupsHandler: (groups: Group[]) => {},
})
export default AdminPanelContext