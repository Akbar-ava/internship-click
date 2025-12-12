import type React from "react";
import type { CartItemProps } from "./Cart.types";
import CartItem from "./CartItem";

type Props = {
  items: CartItemProps[];
  onRemove: (id: number) => void;
};

const CartList: React.FC<Props> = ({ items, onRemove }) => {
  if (!items.length) return <p>Корзина пуста</p>;

  return (
    <div>
      {items.map((it) => (
        <CartItem key={it.id} item={it} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CartList;
