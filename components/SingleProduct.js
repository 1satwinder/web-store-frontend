import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import Product from './Product';
import Head from 'next/head';
import styled from 'styled-components';

const ProductStyled = styled.div`
display: grid;
grid-auto-columns: 1fr;
grid-auto-flow: column;
justify-content: center;
align-items: top;
gap: 2rem;
img{
    width: 100%;
    object-fit: contain;
}
`;

const SINGLE_ITEM_QUERY = gql`
query SINGLE_ITEM_QUERY($id: ID!) {
  Product(where: {
    id : $id
  }){
    name
    price
    description
    id
    photo {
        altText
        image{
            publicUrlTransformed
        }
    }
  }
}
`;

export default function SingleProduct({id}){
    const {data, loading, error} =useQuery(SINGLE_ITEM_QUERY, {
        variables: {
            id: id,
        }
    });
    if(loading) return <p>Loading...</p>;
    if(error) return <DisplayError error={error}/>
    const {Product} = data;
    return <ProductStyled>
        <Head>
            <title>Product | {Product.title}</title>
        </Head>
        <img src={Product.photo.image.publicUrlTransformed}/>
        <div className='details'>
          <h2>{Product.name}</h2>  
          <p>{Product.description}</p> 
        </div>
    </ProductStyled>
}
