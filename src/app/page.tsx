import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    // Esto es un fragmento de React
    <>
      <h1>Creación de componentes</h1>
      <div className={styles.container}>
        <Card text="lorem ipsum" />
        <Card text="lorem ipsum" />
        <Card text="lorem ipsum" />
        <Card text="lorem ipsum" />
      </div>
    </>
  )
}
