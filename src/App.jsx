import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Filter from "./components/Filter.component";
import SearchBar from "./components/SearchBar.component";
import Brand from "./components/Brand.component";

export default function App() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [filtredBrands, setFiltredBrands] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setFiltredBrands(result);
      });
  }, []);

  /**
   * Fetch a Brand by deleting duplicate keys
   * @param {Array} - array
   * @param {String} - key
   * @returns {Array} data
   */
  const getUniqueArrayBy = (array, key) => {
    return [...new Map(array.map((item) => [item[key], item])).values()];
  };

  return (
    <StyledApp>
      <SearchBar
        data={data}
        filtredBrands={filtredBrands}
        search={search}
        selectedFilter={selectedFilter}
        setSearch={setSearch}
        setSelectedFilter={setSelectedFilter}
        setFiltredBrands={setFiltredBrands}
      />
      <Filters>
        <Filter
          name="Tous"
          data={data}
          search={search}
          filtredBrands={filtredBrands}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          setFiltredBrands={setFiltredBrands}
        />
        {getUniqueArrayBy(data, "category").map((item, index) => {
          return (
            <Filter
              key={`filter_${index}`}
              data={data}
              search={search}
              filtredBrands={filtredBrands}
              name={item.category}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              setFiltredBrands={setFiltredBrands}
            />
          );
        })}
      </Filters>
      <Brands>
        {filtredBrands.map((data, index) => {
          return <Brand key={`brand_${index}`} data={data} />;
        })}
      </Brands>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  padding: 20px;
`;

const Filters = styled.ul`
  padding: 0;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const Brands = styled.ul`
  padding: 0;
  brands-style: none;
  margin: 30px 0 0 0;
  gap: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
