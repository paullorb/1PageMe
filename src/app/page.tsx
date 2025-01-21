import styles from "./page.module.css";
import Items from "../components/todo/itemList";
import Nav from "./layout/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <section className={styles.hero}>
        <Items />
      </section>
    </div>
  );
}
