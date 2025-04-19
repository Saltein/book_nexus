import { useEffect, useState } from 'react'
import styles from './ReviewForm.module.css'
import { DefaultButton, RatingStars } from '../../../shared'

export const ReviewForm = ({ onSubmit, onCancel }) => {

    const [stars, setStars] = useState(0)
    const [text, setText] = useState('')

    const handleSubmit = () => {
        const data = {
            stars,
            text,
        }
        onSubmit(data)
    }

    const handleCancel = () => {
        onCancel()
    }

    const handleStars = (stars) => {
        setStars(stars)
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(`.${styles.form}`) === null) {
                handleCancel();
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleSubmit])


    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h2>Оставьте отзыв</h2>
                <RatingStars starSize='48px' ratiable onRate={handleStars} rating={stars}/>
                <textarea className={styles.text} onChange={handleTextChange} />
                <DefaultButton title={'Оставить отзыв'} onClick={handleSubmit} />
            </div>
        </div>
    )
}