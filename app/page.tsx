// Import necessary modules
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./components/styles.module.css"; // Assuming styles are imported from a CSS module

const Page: React.FC = () => {
  return (
    <div className={styles.body}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Artisan Alley</div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#hero" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#why-us" className={styles.navLink}>
                Why Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <h1 className={styles.heroHeading}>Empowering Artisans, Enriching Lives</h1>
        <p className={styles.heroText}>
          Join our mission to create a brighter future for skilled artisans. Discover timeless, eco-friendly creations that make a difference.
        </p>
        <Link href="/services" className={styles.button}>
          Explore More
        </Link>

        {/* Slider Section */}
        <section id="slider" className={styles.slider}>
          <div className={styles.sliderContainer}>
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Artisan 1"
              width={500}
              height={300}
              className={styles.active}
            />
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Artisan 2"
              width={500}
              height={300}
            />
            <Image
              src="/images/wood-and-bamboo-cropped.jpg"
              alt="Artisan 3"
              width={500}
              height={300}
            />
          </div>
          <button className={styles.prev}>⟨</button>
          <button className={styles.next}>⟩</button>
        </section>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2 className={styles.sectionHeading}>About Artisan Alley</h2>
        <p className={styles.sectionText}>
          Artisan Alley is not just a platform, it’s a movement. Dedicated to empowering artisans below the poverty line, we provide a direct,
          fair, and transparent marketplace for their handicrafts.
        </p>
        <p className={styles.sectionText}>
          Through our platform, artisans gain access to customers from around the world, breaking free from exploitative practices and middlemen.
          Together, we support eco-friendly, sustainable, and ethical consumption.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <h2 className={styles.sectionHeading}>Our Goals</h2>
        <ul className={styles.servicesList}>
          <li className={styles.servicesItem}>Showcase artisans’ masterpieces on a global stage.</li>
          <li className={styles.servicesItem}>Ensure artisans earn fair profits for their craftsmanship.</li>
          <li className={styles.servicesItem}>Provide tools for order tracking and customer feedback.</li>
          <li className={styles.servicesItem}>Champion sustainable and eco-friendly creations.</li>
        </ul>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className={styles.whyUs}>
        <h2 className={styles.sectionHeading}>Why Artisan Alley?</h2>
        <p>We go beyond being just another marketplace. At Artisan Alley, we are committed to:</p>
        <div>
          <strong>Empowerment:</strong> We cut out middlemen to ensure artisans receive the full value of their work.
        </div>
        <div>
          <strong>Global Reach:</strong> Our platform connects artisans with customers worldwide, expanding their opportunities.
        </div>
        <div>
          <strong>Ethical Consumption:</strong> We promote eco-friendly, sustainable products that align with global trends.
        </div>
        <div>
          <strong>Transparency:</strong> Customers and artisans both benefit from clear tracking and honest feedback mechanisms.
        </div>
        <p>
          <em>Your support helps artisans rise above poverty and thrive with dignity. Together, we craft a more sustainable and ethical world.</em>
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Artisan Alley. Empowering artisans, one masterpiece at a time.</p>
      </footer>
    </div>
  );
};

export default Page;
