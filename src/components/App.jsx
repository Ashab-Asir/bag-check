import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./SideBar";
const initialItems = [
  {
    id: 1,
    name: "Good mood",
    packed: true,
  },
  {
    id: 2,
    name: "Passport",
    packed: false,
  },
  {
    id: 3,
    name: "Phone Charger",
    packed: false,
  },
];
function App() {
  const localStorageItem = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(localStorageItem || initialItems);
  const totalNumberOfItem = items.length;
  const totalNumberOfPacked = items.filter(
    (item) => item.packed === true
  ).length;
  const handleToggleItem = (id) => {
    const updateItem = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(updateItem);
  };
  const handleDeleteItem = (id) => {
    const updateItem = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updateItem);
  };
  const handleRemoveAllItem = () => {
    setItems([]);
  };
  const handleResetToAll = () => {
    setItems(initialItems);
  };
  const handleMarkAllComplete = () => {
    const updateItem = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(updateItem);
  };
  const handleMarkAllIncomplete = () => {
    const updateItem = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(updateItem);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <BackgroundHeading></BackgroundHeading>
      <main>
        <Header
          totalNumberOfPacked={totalNumberOfPacked}
          totalNumberOfItem={totalNumberOfItem}
        ></Header>
        <ItemList
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
          items={items}
        ></ItemList>
        <Sidebar
          handleRemoveAllItem={handleRemoveAllItem}
          handleResetToAll={handleResetToAll}
          setItems={setItems}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
        ></Sidebar>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
