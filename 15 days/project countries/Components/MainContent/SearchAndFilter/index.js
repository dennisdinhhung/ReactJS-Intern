import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
function SearchAndFilter() {
    return (
        <SearchAndFilterPane>
            <Search />
            <Filter />
        </SearchAndFilterPane>
    )
}
export default SearchAndFilter

const SearchAndFilterPane = styled.div`
display:flex;
algin-items:center;
justify-content:space-between;
margin:10px 10px 10px 10px;
`