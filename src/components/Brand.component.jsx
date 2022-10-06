import React from 'react'

import styled from 'styled-components';

export default function Brand({ data }) {
    return (
        <StyledBrand>
            <BrandLogo src={data.logoUrl} alt={data.name} />
            <BrandName>{data.name}</BrandName>
            {/* <BrandDiscount>Jusqu'à {data.discount}%</BrandDiscount> */}
            <BrandLink href={data.displayUrl} target="_blank">Aller sur le site</BrandLink>
        </StyledBrand>
    )
}

const StyledBrand = styled.li`
@media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const BrandLogo = styled.img`
display: block;
width: 100px;
`;
const BrandName = styled.h4`
font-weight: 600;
width: 100px;
`;
const BrandDiscount = styled.p`
width: 100px;
`;
const BrandLink = styled.a`
text-decoration: none;
border: 1.5px solid black;
border-radius: 20px;
padding: 10px 60px;
color: black;
display: block;
width: max-content;
font-size: 0.8rem;
transition: 0.2s;

&:hover {
    transition: 0.2s;
    background-color: black;
    color: white;
}
`;