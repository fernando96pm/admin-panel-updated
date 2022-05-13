import { createContext } from "react";

export type AdminPanelContextType = {
    sidebarOpened: boolean;
    sidebarHandler: (open: boolean) => void;
}
const AdminPanelContext = createContext<AdminPanelContextType>({
    sidebarOpened: false,
    sidebarHandler: (open: boolean) => {},
})
export default AdminPanelContext