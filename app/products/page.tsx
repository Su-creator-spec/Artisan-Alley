// filepath: [page.tsx](http://_vscodecontentref_/7)
'use client';

import { useEffect, useState } from 'react';
import styles from "./components/products.module.css";

type Product = {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center mt-10">No products available.</div>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>Artisian Alley</div>
        <input type="text" className={styles.searchBar} placeholder="Search for items..." />
        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Cart</a>
          <a href="#">Profile</a>
        </nav>
      </header>

      <section className={styles.productGrid}>
        {products.map((product) => (
          <div key={product._id} className={styles.productCard}>
            <div
              className={styles.productImage}
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className={styles.productInfo}>
              <a href="#"><h3>{product.name}</h3></a>
              <div className={styles.price}>₹{product.price}</div>
              <div className={styles.delivery}>Free Delivery</div>
              <div className={styles.rating}>★ 4.6 (122)</div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}