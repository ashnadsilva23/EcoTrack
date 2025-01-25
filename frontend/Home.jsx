import React from 'react';

const Home = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      color: '#333',
      padding: '20px',
      background: 'linear-gradient(to bottom, #e8f5e9, #ffffff)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: '#2e7d32',
      color: '#fff',
    },
    navbarLogo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    navbarLinks: {
      display: 'flex',
      gap: '15px',
    },
    navbarLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    navbarLinkHover: {
      color: '#c8e6c9',
    },
    header: {
      marginBottom: '20px',
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: '#2e7d32',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      color: '#555',
    },
    image: {
      width: '100%',
      height: '400px',
      borderRadius: '10px',
      margin: '20px 0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      objectFit: 'cover',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      background: '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    cardTitle: {
      fontSize: '1.5rem',
      color: '#388e3c',
      marginBottom: '10px',
    },
    cardText: {
      fontSize: '1rem',
      color: '#666',
    },
    buttonContainer: {
      margin: '20px 0',
    },
    exploreButton: {
      fontSize: '1rem',
      padding: '10px 20px',
      background: '#2e7d32',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    footer: {
      marginTop: '30px',
      fontSize: '0.9rem',
      color: '#777',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navbarLogo}>EcoTrack</div>
        <div style={styles.navbarLinks}>
          <a href="#home" style={styles.navbarLink}>
            Home
          </a>
          <a href="/aware" style={styles.navbarLink}>
            Awareness
          </a>
          <a href="#login" style={styles.navbarLink}>
            Login
          </a>
        </div>
      </nav>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to EcoTrack</h1>
        <p style={styles.headerSubtitle}>
          Your one-stop solution for sustainable tracking!
        </p>
      </header>
      <img
        src="https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Eco-friendly environment"
        style={styles.image}
      />
      <section style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Track Your Carbon Footprint</h2>
          <p style={styles.cardText}>
            Monitor and reduce your environmental impact with ease.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Learn Sustainability Tips</h2>
          <p style={styles.cardText}>
            Get expert advice on adopting eco-friendly practices.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Join the Community</h2>
          <p style={styles.cardText}>
            Connect with like-minded individuals making a difference.
          </p>
        </div>
      </section>
      <div style={styles.buttonContainer}>
        <button
          style={styles.exploreButton}
          onClick={() => alert('Explore the world of sustainability!')}
        >
          Explore
        </button>
      </div>
      <footer style={styles.footer}>
        <p>© 2025 EcoTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
