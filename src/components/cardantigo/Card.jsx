import styles from './Card.module.css'

export function Card({image, alt, text}) {
    console.log(image, alt)
    return (
        <div className={styles.cardBox}>
            <div className={styles.card}>
                <img className={styles.img} src={image} alt={alt} />
            </div>
                <p className={styles.backCard}>{text}</p>
        </div>
    );
}