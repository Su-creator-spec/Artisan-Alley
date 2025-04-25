// Import necessary modules
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./components/services-style.module.css"; // Assuming styles are imported from a CSS module

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Artisans Alley</div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#services" className={styles.navLink}>Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login" className={styles.navLink}>Login</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/create-account" className={styles.navLink}>Create Account</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <h1 className={styles.heading}>Our Services</h1>
        <p className={styles.description}>
          Discover the finest traditional Indian crafts and artisan skills that we bring to life through these services:
        </p>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <Link href="/pottery">
              <Image
                src="/images/wood-and-bamboo-cropped.jpg"
                alt="Pottery"
                width={500}
                height={300}
                className={styles.serviceImage}
              />
            </Link>
            <h2 className={styles.cardTitle}>Pottery</h2>
            <p className={styles.cardDescription}>
              Delve into the world of clay art and witness the creation of stunning ceramic and earthenware pieces.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/woodcrafting">
              <Image
                src="/images/wood-and-bamboo-cropped.jpg"
                alt="Wood Crafting"
                width={500}
                height={300}
                className={styles.serviceImage}
              />
            </Link>
            <h2 className={styles.cardTitle}>Wood Crafting</h2>
            <p className={styles.cardDescription}>
              Explore intricately carved masterpieces that showcase India's rich woodcraft heritage.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Painting"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Painting</h2>
            <p className={styles.cardDescription}>
              Learn about traditional Indian art styles like Madhubani, Warli, and Pattachitra.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Idol Making"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Idol Making</h2>
            <p className={styles.cardDescription}>
              Experience the delicate craftsmanship behind the creation of idols for festivals and rituals.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Metal Handicrafts"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Metal Handicrafts</h2>
            <p className={styles.cardDescription}>
              Discover the beauty of Dokra art and other intricate metal crafts from India.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Wood Carving"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Wood Carving</h2>
            <p className={styles.cardDescription}>
              Celebrate the intricate art of carving wood into beautiful decorative and functional items.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Weaving"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Weaving</h2>
            <p className={styles.cardDescription}>
              Explore different weaving styles and techniques that make Indian textiles globally renowned.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Special Weaving Styles"
              width={500}
              height={300}
              className={styles.serviceImage}
            />
            <h2 className={styles.cardTitle}>Special Weaving Styles</h2>
            <p className={styles.cardDescription}>
              Dive into the diversity of Indian weaving, from Banarasi to Kanjeevaram, and more.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Indian Handicrafts & Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicesPage;
