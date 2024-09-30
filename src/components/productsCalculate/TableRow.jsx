import "./module.product.css";

const TableRow = ({
  id,
  productName,
  stock,
  price,
  quantity,
  total,
  incrementProduct,
  decrementProduct,
}) => {
  return (
    <tr>
      <td className="td">{id}</td>
      <td className="td">{productName}</td>
      <td className="td">{stock}</td>
      <td className="td">{price}</td>
      <td className="td">{quantity}</td>
      <td className="td">{total}</td>
      <td>
        <button onClick={() => decrementProduct(id)}>-</button>
      </td>
      <td>
        <button onClick={() => incrementProduct(id)}>+</button>
      </td>
    </tr>
  );
};

export default TableRow;
