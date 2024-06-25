import AddItemForm from "./AddItemForm";
import ButtonGroups from "./ButtonGroups";

export default function SideBar({
  handleResetToAll,
  setItems,
  handleRemoveAllItem,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}></AddItemForm>
      <ButtonGroups
        handleResetToAll={handleResetToAll}
        handleRemoveAllItem={handleRemoveAllItem}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllIncomplete={handleMarkAllIncomplete}
      ></ButtonGroups>
    </div>
  );
}
