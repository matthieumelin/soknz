import React from 'react'

import styled from 'styled-components'

export default function Filter({ name, selectedFilter, setSelectedFilter }) {
    return (
        <StyledFilter
            type="button"
            name={name}
            selectedFilter={selectedFilter}
            onClick={() => setSelectedFilter(name)}> {name}</StyledFilter >
    )
}

const StyledFilter = styled.button`
background-color: ${(props) => props.selectedFilter === props.name ? "black" : "transparent"};
color: ${(props) => props.selectedFilter === props.name ? "white" : "black"};
border: 1.5px solid black;
border-radius: 20px;
padding: 7px 0;
width: 200px;
font-weight: 600;
font-family: inherit;
transition: 0.2s;

&:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: black;
    color: white;
}
`;