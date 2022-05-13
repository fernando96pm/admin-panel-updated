import { ReactNode } from "react";
import { useState } from "react";
import { FC } from "react";
import AdminPanelContext, { AdminPanelContextType } from "./AdminPanelContext";

const AdminPanelContextProvider:FC<{ children: ReactNode}> = ({ children }) => {

    const [sidebarOpened, setSidebarOpened] = useState<boolean>(false)

    const sidebarHandler = (open:boolean) => {
        setSidebarOpened(open)
    }

    const contextValue: AdminPanelContextType = {
        sidebarOpened: sidebarOpened,
        sidebarHandler: sidebarHandler
    }
    return (
        <AdminPanelContext.Provider value={contextValue}>
            {children}
        </AdminPanelContext.Provider>
    )
}
export default AdminPanelContextProvider