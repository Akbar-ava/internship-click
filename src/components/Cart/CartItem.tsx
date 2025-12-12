import type React from "react";
import type { CartItemProps } from "./Cart.types";
import "./Cart.css";

type Props = {
  item: CartItemProps;
  onRemove: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="cart-item__info">
        <div className="cart-item__title" title={item.title}>
          {item.title}
        </div>

        <div className="cart-item__meta">
          <span>Qty: {item.qty}</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
        </div>

        <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;