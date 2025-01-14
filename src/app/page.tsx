import styles from "./page.module.css";
import Items from "./components/items";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button>Login</button>
        <button>Signup</button>
      </nav>
      <section className={styles.hero}>
        <Items />
      </section>
    </div>
  );
}
