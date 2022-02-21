import Item from "./styles/ItemStyles";
import Title from "./styles/Title";
import Link from "next/link";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import DeleteProduct from "./DeleteProduct";
import AddToCart from "./AddToCart";

const Img = styled.img`
  max-width: 100%;
`;

function Product({ product }) {
  return (
    <Item>
      <Img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* Add button to edit or delete items */}
      <div className="buttonList">
        <Link
          href={{
            pathname: "/update",
            query: {
              id: product.id
            }
          }}
        >Edit page✏️✏️</Link> 
        <AddToCart id={product.id}></AddToCart>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </Item>
  );
}

export default Product;
