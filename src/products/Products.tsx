import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import CButton from "../components/CButton";
import "./Products.css";
import { useCart } from "../context/CartContext";
import mockProducts from "../db/mock-db.json";

type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
};

const Products: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<"api" | "mock">("api");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await apiClient.get<Product[]>("/products");
        if (!alive) return;

        setProducts(data);
        setDataSource("api");
      } catch (e: any) {
        if (!alive) return;

        setProducts(mockProducts as Product[]);
        setDataSource("mock");
        setError("API недоступно — показаны локальные товары.");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (loading) return <div className="products">Загрузка...</div>;

  return (
    <section className="products">
      <div className="products__head">
        <h2 className="products__title">Товары</h2>
        {dataSource === "mock" && <span className="products__badge">mock</span>}
      </div>

      {error && <div className="products__error">{error}</div>}

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
