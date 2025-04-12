import styles from './ExchangeExample.module.css'
import rightArrowIcon from './assets/right-arrow.svg'

export const ExchangeExample = (props) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.status}>{props.exchangeStatus}</span>

            <div className={styles.coverWrapper}>
                <img className={styles.cover} src={props.bookCover} />
            </div>

            <div className={styles.exchangeInfo}>
                <div className={styles.title_author}>
                    <h3 className={styles.title}>{props.bookTitle}</h3>
                    <p className={styles.author}>{props.bookAuthor}</p>
                </div>

                <div className={styles.giver_receiver}>
                    <div className={styles.divider} />
                    <div className={styles.gr}>
                        <span>{props.giver}</span>
                        <img src={rightArrowIcon} />
                        <span>{props.receiver}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}