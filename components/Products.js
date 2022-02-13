import gql from "graphql-tag";
import {useQuery} from '@apollo/client';
import ProductPage from "../pages";
import styled from "styled-components";
import Product from "./Product";

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
 allProducts {
  id
  name
  price
  description
  photo{
    id
    image{
      publicUrlTransformed
    }
  }
}
}
`;

const ProductList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 60px;
`;

function Products() {
  const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return<p>Loading...</p>
  if (error) return<p>Error: {error.message}</p>
  return (<ProductList>
      {data.allProducts.map((item) => <Product key={item.id} product={item}></Product>)}
  </ProductList>)
}

export default Products;
