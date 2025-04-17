import { DefaultButton } from '../../shared'
import { PreviewLabel } from '../../shared/ui/PreviewLabel/PreviewLabel'
import { ReviewsList } from '../../widgets/ReviewsList/ReviewsList'
import styles from './ReviewsPage.module.css'

export const ReviewsPage = () => {
    return (
        <div className={styles.wrapper}>
            <PreviewLabel 
                title={'Отзывы наших пользователей'}
                description={'Более 5000 успешных обменов книгами'}
            />

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