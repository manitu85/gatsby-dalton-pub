import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Product = ({ product }) => {

  const { name, price, ingredients } = product
  const { fixed } = product.image

  return (
    <ProductWrapper>
      <Img fixed={fixed}
        className="img" />
      <div className="text">
        <ProductContent>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}€
          </ProductPrice>
        </ProductContent>
        <ProductInfo>{ingredients}</ProductInfo>
      </div>
    </ProductWrapper>
  )
}

export default Product

export const ProductWrapper = styled.div`

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  
  .img {
    border-radius: 0.5rem;
  }

`

const ProductName = styled.h3`
  color: ${({ theme }) => theme.colors.mainYellow};
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.5rem;
`
const ProductPrice = styled.h3`
  color: ${({ theme }) => theme.colors.mainYellow};
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.5rem;

`
const ProductInfo = styled.p`
  color: ${({ theme }) => theme.colors.mainGray};
  margin-top: 0.5rem;
  word-spacing: 0.2rem;
  text-transform: lowercase;
  font-family: var(--font-primary);
`

const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  text-transform: uppercase;
`;
