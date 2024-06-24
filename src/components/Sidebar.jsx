import AddItemForm from "./AddItemForm";
import ButtonGroups from "./ButtonGroups";

export default function Sidebar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}></AddItemForm>
      <ButtonGroups></ButtonGroups>
    </div>
  );
}
