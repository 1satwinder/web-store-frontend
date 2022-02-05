import Item from "./styles/ItemStyles";
import Title from './styles/Title';
import Link from 'next/link'
import PriceTag from './styles/PriceTag';
import formatMoney from "../lib/formatMoney";

function Product({product}) {
  return <Item>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name}/>
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* Add button to edit or delete items */}
      
  </Item>;
}

export default Product;
