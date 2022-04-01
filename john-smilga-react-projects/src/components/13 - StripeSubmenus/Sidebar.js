import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div
            className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
            onClick={closeSidebar}
        >
            <aside className="sidebar">
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                {
                    sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {
                                        links.map((link, index) => {
                                            const { label, icon, url } = link;
                                            return (
                                                <a key={index} href={url}>
                                                    {icon}
                                                    {label}
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </aside>
        </div>
    )
}

export default Sidebar;
