import type React from "react";
import { useCart } from "../../context/CartContext";
import CartList from "./CartList";
import "./Cart.css";

const Cart: React.FC = () => {
  
  const { items, removeFromCart, totalCount, totalPrice } = useCart();
  

  return (
    <aside className="cart">
      <div className="cart__header">
        <h3>Корзина</h3>
        <div className="cart__totals">
          <span>Товаров: {totalCount}</span>
          <span>Сумма: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <CartList items={items} onRemove={removeFromCart} />
    </aside>
  );
};


export default Cart;

