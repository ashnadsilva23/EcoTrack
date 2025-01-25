import React from 'react';

const Awareness = () => {

  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page
  };

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
    header: {
      marginBottom: '20px',
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: '#2e7d32',
      border: '2px solid #2e7d32', // Add a border around the title
      padding: '10px',
      display: 'inline-block',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      color: '#555',
    },
    backButton: {
      padding: '10px 20px',
      backgroundColor: '#388e3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      margin: '10px 0',
      alignSelf: 'flex-start',
    },
    section: {
      margin: '20px 0',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#388e3c',
      marginBottom: '10px',
    },
    sectionContent: {
      fontSize: '1rem',
      color: '#666',
    },
    videoContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px 0',
    },
    video: {
      width: '100%',
      maxWidth: '560px',
      height: '315px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      margin: '20px 0',
    },
    image: {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      objectFit: 'cover',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    footer: {
      marginTop: '30px',
      fontSize: '0.9rem',
      color: '#777',
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={handleBackClick}>Back</button>
      
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>EcoTrack</h1>
       
      </header>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is Pollution?</h2>
        <p style={styles.sectionContent}>
          Pollution refers to the presence or introduction of harmful substances or products into the environment. 
          It has become one of the most significant threats to our planet, affecting air, water, soil, and living organisms.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Types of Pollution</h2>
        <p style={styles.sectionContent}>
          Pollution can be classified into different types:
          <ul>
            <li>Air Pollution: Harmful substances released into the air, including gases like carbon dioxide and nitrogen oxides.</li>
            <li>Water Pollution: Contamination of water bodies, affecting marine life and human health.</li>
            <li>Soil Pollution: The presence of toxic chemicals or waste in the soil, impacting agriculture and wildlife.</li>
            <li>Noise Pollution: Excessive noise levels from industries, traffic, and urban areas that disturb wildlife and human health.</li>
          </ul>
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Pollution Images</h2>
        <div style={styles.imageContainer}>
          <img
            src="https://images.pexels.com/photos/39553/industry-sunrise-clouds-fog-39553.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Air Pollution"
            style={styles.image}
          />
          <img
            src="https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Water Pollution"
            style={styles.image}
          />
          <img
            src="https://images.pexels.com/photos/25851683/pexels-photo-25851683/free-photo-of-man-working-at-garbage-dump.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Soil Pollution"
            style={styles.image}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Watch and Learn</h2>
        <p style={styles.sectionContent}>
          These videos will help you understand the devastating effects of pollution and how we can contribute to reducing it.
        </p>
        <div style={styles.videoContainer}>
          <iframe
            style={styles.video}
            src="https://www.youtube.com/watch?v=e6rglsLy1Ys"
            title="Pollution Documentary"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            style={styles.video}
            src="https://www.youtube.com/watch?v=TVMYY4Uun8M"
            title="Air Pollution Effects"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 EcoTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Awareness;
