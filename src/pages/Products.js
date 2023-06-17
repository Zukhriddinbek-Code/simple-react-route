import { Link } from "react-router-dom";

const PRODUCT = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];

const ProductPage = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCT.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
