import styles from "./page.module.css";
import Items from "../components/todo/itemList";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Items />
      </section>
    </div>
  );
}
