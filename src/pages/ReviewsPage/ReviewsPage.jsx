import { useState, useEffect } from 'react'
import { DefaultButton } from '../../shared'
import { PreviewLabel } from '../../shared/ui/PreviewLabel/PreviewLabel'
import { ReviewsList } from '../../widgets/ReviewsList/ReviewsList'
import styles from './ReviewsPage.module.css'
import { ReviewForm } from '../../features'

export const ReviewsPage = () => {

    const [isLeaving, setLeaving] = useState(false)

    const handleCreateReview = () => {
        setLeaving(true)
    }
    const handleCancel = () => {
        setLeaving(false)
    }

    const handleLeaveReview = (formData) => {
        console.log(formData)
        setLeaving(false)
    }

    useEffect(() => {
        if (isLeaving) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [isLeaving]);

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
                    <DefaultButton title={'Оставить отзыв'} onClick={handleCreateReview}/>
                </div>
            </div>

            {isLeaving && <ReviewForm onSubmit={handleLeaveReview} onCancel={handleCancel} />}
        </div>
    )
}