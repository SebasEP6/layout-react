import styles from './styles.module.css'

interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  const {
    text
  } = props;

  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
}

export default Card;