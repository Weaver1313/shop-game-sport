import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Order from "./Order";

export default function Header(props) {
  const [cardOpen, setCardOpen] = useState(false);

  const showOrders = (props) => {
    let summa = 0;

    props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

    return (
      <div>
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">Сумма: {summa}₽</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h6>Товары не добавлены.</h6>
      </div>
    );
  };

  return (
    <header>
      <div className="logo">
        <span>Pro Game Sport </span>

        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <MdOutlineShoppingCart
          className={`shop__card__button ${cardOpen && "active"}`}
          onClick={() => setCardOpen(!cardOpen)}
        />

        {cardOpen && (
          <div className="shop__card">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
