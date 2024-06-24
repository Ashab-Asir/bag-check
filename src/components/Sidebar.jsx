import AddItemForm from "./AddItemForm";
import ButtonGroups from "./ButtonGroups";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm></AddItemForm>
      <ButtonGroups></ButtonGroups>
    </div>
  );
}
