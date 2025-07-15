// components/BackToTop.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      aria-label="Back to top"
    >
      ↑
    </motion.div>
  );
};

export default BackToTop;
