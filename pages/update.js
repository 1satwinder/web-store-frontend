import UpdateProduct from "../components/UpdateProduct";

export default function UpdateProductPage({ query }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
