import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/items";
import Categories from "./components/Categories";
import ShowItem from "./components/ShowItem";

function App() {
  const items = [
    {
      id: 1,
      title: "ПК Кибертрон",
      img: "cybertron.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "pc",
      price: "100000",
    },
    {
      id: 2,
      title: "ПК Кибертрон V-2.0",
      img: "cybertron_v_2.0.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "pc",
      price: "150000",
    },
    {
      id: 3,
      title: "Razer Mamba",
      img: "Razer_mamba.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "mouse",
      price: "10500",
    },
    {
      id: 4,
      title: "Razer Kraken",
      img: "razer_kraken.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "headphones",
      price: "15000",
    },
    {
      id: 5,
      title: "MSI GE62",
      img: "msi_ge62.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "laptop",
      price: "200000",
    },
    {
      id: 6,
      title: "Razer Blade",
      img: "razer_blade.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eaque.",
      category: "laptop",
      price: "200000",
    },
  ];

  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showItem, setShowItem] = useState(false);
  const [fullItems, setFullItems] = useState({});

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const checkCategories = (key) => {
    if (key === "all") {
      setCurrentItems(items);
      return;
    }

    setCurrentItems(items.filter((el) => el.category === key));
  };

  const onShowItem = (item) => {
    setShowItem(!showItem);
    setFullItems(item);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories checkCategories={checkCategories} />
      <ItemsList
        onShowItem={onShowItem}
        items={currentItems}
        onAdd={addToOrder}
      />
      {showItem && (
        <ShowItem
          item={fullItems}
          items={items}
          onShowItem={onShowItem}
          onAdd={addToOrder}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
