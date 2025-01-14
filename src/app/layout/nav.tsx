import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <button className={styles.authButton}>Login</button>
      <button className={styles.authButton}>Signup</button>
    </nav>
  );
}