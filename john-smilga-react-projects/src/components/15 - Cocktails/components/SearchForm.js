import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {

    const { setFormValues } = useGlobalContext();
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setFormValues({
                searchTerm: value,
            })
        }, 300);
    }

    return (
        <section className="section search">
            <form className="search-form">
                <div className="form-control">
                    <label htmlFor="name">search your cocktail</label>
                    <input
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
