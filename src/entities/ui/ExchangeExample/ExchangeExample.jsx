import { DefaultDivider } from '../../../shared/ui'
import styles from './ExchangeExample.module.css'
import rightArrowIcon from './assets/right-arrow.svg'

export const ExchangeExample = (props) => {

    const status = props.status === 'completed' ? 'Успешный обмен' : 'В процессе'

    return (
        <div className={styles.wrapper_of_wrapper}>
            <div className={styles.wrapper}>
                <span className={styles.status}>{status}</span>

                <div className={styles.coverWrapper}>
                    <img className={styles.cover} src={props.cover} />
                </div>

                <div className={styles.exchangeInfo}>
                    <div className={styles.title_author}>
                        <h3 className={styles.title}>{props.bookTitle}</h3>
                        <p className={styles.author}>{props.author}</p>
                    </div>

                    <div className={styles.giver_receiver}>
                        <DefaultDivider />
                        <div className={styles.gr}>
                            <span>{props.sender}</span>
                            <img src={rightArrowIcon} />
                            <span>{props.recipient}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}