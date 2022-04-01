import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {

    const {
        isSubmenuOpen,
        sublink: { page, links },
        positionSubmenu
    } = useGlobalContext();

    const [columns, setColumns] = useState('col-2');
    const container = useRef(null);

    useEffect(() => {
        setColumns('col-2');
        const submenu = container.current;
        const { center, bottom } = positionSubmenu;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        if (links.length === 3) {
            setColumns('col-3');
        }
        if (links.length > 3) {
            setColumns('col-4');
        }
    }, [page]);

    return (
        <aside
            ref={container}
            className={isSubmenuOpen ? 'submenu show' : 'submenu'}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {
                        links.map((link, index) => {
                            const { url, icon, label } = link;
                            return (
                                <a key={index} href={url}>
                                    {icon}
                                    {label}
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </aside>
    )
}

export default Submenu;
