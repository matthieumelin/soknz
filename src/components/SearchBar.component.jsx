import React from "react";

import styled from "styled-components";

export default function SearchBar({
  data,
  filtredBrands,
  search,
  selectedFilter,
  setSearch,
  setSelectedFilter,
  setFiltredBrands,
}) {
  const onSearch = (event) => {
    const newSearch = event.target.value;

    setSearch(newSearch);

    const filtred = data.filter((item) => {
      return item.name
        .toLowerCase()
        .trim()
        .includes(newSearch.toLowerCase().trim());
    });

    if (filtred.length) {
      setSelectedFilter(filtred[0].category);
      setFiltredBrands(filtred);
    }
  };
  return (
    <StyledSearchBar
      type="text"
      value={search}
      onChange={onSearch}
      placeholder="Rechercher un partenaire..."
    />
  );
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
