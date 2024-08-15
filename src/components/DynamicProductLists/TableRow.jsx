const TableRow = ({
  id,
  productName,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => increment(id)} disabled={quantity === stock}>
          +
        </button>
        <button onClick={() => decrement(id)} disabled={quantity === 0}>
          -
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
