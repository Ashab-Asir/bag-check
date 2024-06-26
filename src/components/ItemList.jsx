import ReactSelect from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const sortingOptions = [
    {
      label: "sort by default",
      value: "default",
    },
    {
      label: "sort by packed",
      value: "packed",
    },
    {
      label: "sort by unpacked",
      value: "unpacked",
    },
  ];
  const [sortBy, setSortBy] = useState("default");
  const sortedItem = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return items;
  });
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView></EmptyView> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <ReactSelect
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          ></ReactSelect>
        </section>
      ) : null}
      {sortedItem.map((item) => {
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
