import React from "react";

export default function ShowItem({ item, onAdd, onShowItem }) {
  return (
    <div className="full__item">
      <div>
        <img
          src={"/img/" + item.img}
          onClick={() => {
            onShowItem(item);
          }}
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}₽</b>
        <div className="add__to__card" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
}
