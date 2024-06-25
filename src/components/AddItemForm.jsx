import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!itemText) {
          alert("input can't be empty");
          inputRef.current.focus();
          return;
        }
        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        };
        setItems((prev) => [...prev, newItem]);
        setItemText("");
      }}
    >
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
        autoFocus
      />
      <Button>add an Item</Button>
    </form>
  );
}
