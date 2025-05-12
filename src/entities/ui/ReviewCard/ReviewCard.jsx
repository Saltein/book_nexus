import { formatDate } from '../../../shared/lib/date/formatDate'
import { RatingStars } from '../../../shared/ui/RatingStars/RatingStars'
import styles from './ReviewCard.module.css'
import quoteIcon from './assets/quote.svg'
import profileImage from './assets/user.svg'

export const ReviewCard = ({ id, UserAccount, rating, created_at, comment }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageConOfCon}>
                <div className={styles.imageCon}>
                    <img className={styles.image} src={profileImage} />
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <img className={styles.quoteIcon} src={quoteIcon} />
                <div className={styles.info}>
                    <h5 className={styles.name}>{UserAccount.UserProfile.name}</h5>
                    <RatingStars rating={rating} />
                    <p className={styles.date}>{formatDate(created_at, true)}</p>
                    <p className={styles.text}>{comment}</p>
                </div>
            </div>

        </div>
    )
}