import Button from "./Button";

export default function ButtonGroups({
  handleResetToAll,
  handleRemoveAllItem,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllIncomplete} type={"secondary"}>
        Mark all as incomplete
      </Button>
      <Button onClick={handleMarkAllComplete} type={"secondary"}>
        Mark all as complete
      </Button>
      <Button onClick={handleResetToAll} type={"secondary"}>
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItem} type={"secondary"}>
        Remove all items
      </Button>
    </section>
  );
}
