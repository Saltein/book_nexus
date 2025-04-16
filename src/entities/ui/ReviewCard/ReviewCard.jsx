import styles from './ReviewCard.module.css'
import quoteIcon from './assets/quote.svg'

export const ReviewCard = ({ id, name, rating, date, text, image }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageConOfCon}>
                <div className={styles.imageCon}>
                    <img className={styles.image} src={image} />
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <img src={quoteIcon} />
                <div className={styles.info}>
                    <h5 className={styles.name}>{name}</h5>
                    {/* RaitingScale */}
                    <p className={styles.date}>{date}</p>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>

        </div>
    )
}