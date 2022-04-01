import React, { createContext, useContext, useState } from 'react';
import sublinks from './data.js';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [sublink, setSublink] = useState({ page: '', links: [] });
    const [positionSubmenu, setPositionSubmenu] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (name, position) => {
        const _sublink = sublinks.find(item => item.page === name);
        setIsSubmenuOpen(true);
        setSublink(_sublink);
        setPositionSubmenu(position);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                sublink,
                positionSubmenu
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };
