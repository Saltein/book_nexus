import { useState } from 'react'
import styles from './ReviewForm.module.css'
import { DefaultButton, RatingStars } from '../../../shared'
import { reviewsApi } from '../../../shared/api/reviewsApi'
import { useSelector } from 'react-redux'
import { getId } from '../../../entities/user/model/userSlice'

export const ReviewForm = ({ handleClose }) => {
    const userId = useSelector(getId)

    const [stars, setStars] = useState(0)
    const [text, setText] = useState('')
    const [warning, setWarning] = useState('')

    const handleSubmit = async () => {
        if (stars <= 0) {
            setWarning('Поставьте рейтинг!')
            return
        }
        if (text.length <= 0) {
            setWarning('Напишите что нибудь в поле ввода!')
            return
        }

        try {
            const response = reviewsApi.leave(userId, stars, text)
            if (response) {
                console.log("Отзыв оставлен!", response)
            } else {
                console.log("Неизвестная ошибка отправки отзыва")
            }
        } catch (error) {
            console.error('Ошибка отправки отзыва', error)
        }
        handleClose()
    }

    const handleStars = (stars) => {
        setStars(stars)
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.form}>
            <h2>Оставьте отзыв</h2>
            <RatingStars starSize='48px' rateable onRate={handleStars} rating={stars} />
            <textarea className={styles.text} onChange={handleTextChange} />
            {warning && <span className={styles.warning}>{warning}</span>}
            <DefaultButton title={'Оставить отзыв'} onClick={handleSubmit} />
        </div>
    )
}