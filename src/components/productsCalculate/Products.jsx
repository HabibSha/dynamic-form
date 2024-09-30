import { useState } from "react";
import TableRow from "./TableRow";

import "./module.product.css";

const productFields = [
  {
    id: "P1",
    productName: "Samsung Galaxy s23 Ultra",
    price: 1500,
    stock: 8,
  },
  {
    id: "P2",
    productName: "IPhone 14 Pro Max",
    price: 1600,
    stock: 7,
  },
  {
    id: "P3",
    productName: "Sony Xperia 1 Mark 3",
    price: 1100,
    stock: 5,
  },
];

const Products = () => {
  const [products, setProducts] = useState(
    productFields.map((product) => ({ ...product, quantity: 0, total: 0 }))
  );

  const incrementProduct = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const decrementProduct = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.quantity > 0) {
          product.quantity--;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  console.log(total);

  return (
    <>
      <h1>Product Lists</h1>
      <article className="article">
        <thead className="thead">
          <tr>
            <th className="th">ID</th>
            <th className="th">Product Name</th>
            <th className="th">Stock</th>
            <th className="th">Price</th>
            <th className="th">Quantity</th>
            <th className="th">Total</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        {products && products.length > 0 && (
          <tbody className="tbody">
            {products.map((product) => (
              <TableRow
                key={product.id}
                {...product}
                incrementProduct={incrementProduct}
                decrementProduct={decrementProduct}
              />
            ))}
          </tbody>
        )}
      </article>
      <h4>Subtotal: {total} USD</h4>
    </>
  );
};

export default Products;
