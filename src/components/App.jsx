import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
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
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeading></BackgroundHeading>
      <main>
        <Header></Header>
        <ItemList items={items}></ItemList>
        <Sidebar setItems={setItems}></Sidebar>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
