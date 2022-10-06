import React from 'react'

import styled from 'styled-components'

export default function SearchBar({ search, setSearch }) {
  return (
    <StyledSearchBar
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Rechercher une marque..." />
  )
}

const StyledSearchBar = styled.input`
box-sizing: border-box;
width: 100%;
font-family: inherit;
border: 1px solid black;
border-radius: 20px;
padding: 10px;
outline: none;
transition: 0.2s;

&:focus {
  transition: 0.2s;
  border: 1.5px solid black;
}
`;