import { DefaultButton } from '../../shared'
import { ReviewsList } from '../../widgets/ReviewsList/ReviewsList'
import styles from './ReviewsPage.module.css'

export const ReviewsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.preview}>
                <h1>Отзывы наших пользователей</h1>
                <p>Более 5000 успешных обменов книгами</p>
            </div>

            <div className={styles.reviewsCon}>
                <ReviewsList />
            </div>

            <div className={styles.leaveReviewCon}>
                <div className={styles.button}>
                    <DefaultButton title={'Оставить отзыв'} />
                </div>
            </div>
        </div>
    )
}