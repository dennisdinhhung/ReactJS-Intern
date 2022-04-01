import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {

    const { openSidebar, openModal, closeSidebar } = useGlobalContext();

    return (
        <main onClick={closeSidebar}>
            <button
                className="sidebar-toggle"
                onClick={(e) => {
                    openSidebar();
                    e.stopPropagation();
                }}
            >
                <FaBars />
            </button>
            <button
                className="btn"
                onClick={openModal}
            >
                show modal
            </button>
        </main>
    )
}

export default Home;
