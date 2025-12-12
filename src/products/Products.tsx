import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import CButton from "../components/CButton";
import "./products.css";
import { useCart } from "../context/CartContext";


type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

const Products: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get<Product[]>("/products");
        setProducts(data);
      } catch (e: any) {
        setError("Ошибка загрузки товаров");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="products">Загрузка...</div>;
  if (error) return <div className="products">{error}</div>;

  return (
    <section className="products">
      <h2 className="products__title">Товары</h2>

      <div className="products__grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <div className="product-card__image">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>

            <div className="product-card__content">
              <div className="product-card__title" title={p.title}>
                {p.title}
              </div>
              <div className="product-card__category">{p.category}</div>
              <div className="product-card__price">${p.price}</div>
            </div>

            <CButton
              title="Добавить в корзину"
              className="product-card__btn"
              onClick={() => addToCart(p)}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
