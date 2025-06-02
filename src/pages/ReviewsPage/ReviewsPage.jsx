import { useState, useEffect } from 'react'
import { DefaultButton, ModalWindow } from '../../shared'
import { PreviewLabel } from '../../shared/ui/PreviewLabel/PreviewLabel'
import { ReviewsList } from '../../widgets/ReviewsList/ReviewsList'
import styles from './ReviewsPage.module.css'
import { ReviewForm } from '../../features'
import { useNavigate } from 'react-router-dom'

export const ReviewsPage = () => {
    const navigate = useNavigate()

    const [isLeaving, setLeaving] = useState(false)

    const handleCreateReview = () => {
        if (localStorage.getItem('user')) {
            setLeaving(true)
        } else {
            navigate('/auth')
        }
    }
    const handleClose = () => {
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
                    <DefaultButton title={'Оставить отзыв'} onClick={handleCreateReview} />
                </div>
            </div>

            {isLeaving &&
                <ModalWindow onClose={handleClose}>
                    <ReviewForm handleClose={handleClose} />
                </ModalWindow>}
        </div>
    )
}