import styles from './styles.module.css'

type CardProps = {
  text: string;
}

const Card = (props: CardProps) => {
  const {
    text
  } = props; // destructuración de objeto

  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
}

export default Card;