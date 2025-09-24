import Image from "next/image";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderWrapper}>
        <Image
          src="/eagle.jpg"
          alt="Eagle"
          className={styles.eagle}
          width={120}   // adjust to your image size
          height={120}  // adjust to your image size
          priority      // ensures it's loaded fast
        />
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
