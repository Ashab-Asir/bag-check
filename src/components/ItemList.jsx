import { useState } from "react";

const initialItems = [
  {
    name: "Good mood",
    packed: true,
  },
  {
    name: "Passport",
    packed: false,
  },
  {
    name: "Phone Charger",
    packed: false,
  },
];
export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.name} item={item}></Item>;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed}></input>
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
