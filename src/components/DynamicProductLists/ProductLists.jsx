import { useState } from "react";
import TableRow from "./TableRow";

const productList = [
  {
    id: "P1",
    productName: "Keyboard",
    stock: 10,
    price: 2000,
  },
  {
    id: "P2",
    productName: "Mouse",
    stock: 5,
    price: 1500,
  },
  {
    id: "P3",
    productName: "Headphone",
    stock: 15,
    price: 2500,
  },
];

const ProductLists = () => {
  // TODO: if we have product quantity and total inside the json data. then we just map on productList. we can see in the productList, there is no quantity and total. that's why we iterate in the productList and add quantity and total.
  const [products, setProducts] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.quantity > 0) {
          product.quantity--;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <>
      <h1>Product Lists</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductName</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          {products && products.length > 0 && (
            <tbody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  {...product}
                  increment={incrementQuantity}
                  decrement={decrementQuantity}
                />
              ))}
            </tbody>
          )}
        </table>
        {total > 0 && <h3>Subtotal: {total} BDT</h3>}
      </div>
    </>
  );
};

export default ProductLists;
