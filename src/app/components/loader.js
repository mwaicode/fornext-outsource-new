// import React from 'react';
// import styles from './Loader.module.css'; // Import CSS module

// const Loader = () => {
//     return (
//         <div className={styles.loader}>
//             <div className={styles.spinner}></div>
//             <p className={styles.loaderText}>Loading...</p> {/* Use the new class here */}
//         </div>
//     );
// };

// export default Loader; // Ensure it's a default export


// components/Loader.js
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderWrapper}>
        <img src="/eagle.jpg" alt="Eagle" className={styles.eagle} />
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
