import React from "react";

export default function Categories(props) {
  const categories = [
    {
      key: "all",
      name: "Все",
    },
    {
      key: "laptop",
      name: "Ноутбуки",
    },
    {
      key: "headphones",
      name: "Наушники",
    },
    {
      key: "mouse",
      name: "Мышки",
    },
    {
      key: "pc",
      name: "ПК",
    },
  ];

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.checkCategories(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
