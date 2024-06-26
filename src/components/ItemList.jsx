export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
            key={item.id}
            item={item}
          ></Item>
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        ></input>
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
