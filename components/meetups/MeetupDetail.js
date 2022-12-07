import styles from "./MeetupDetail.module.css";

export default function MeetupDetail({ image, title, address, description }) {
  return (
    <section className={styles.detail}>
      <img src={image} alt={`${title} meetup image`} />

      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
