import React from 'react';
import styles from './RatingStars.module.css';
import starEmpty from './assets/star-empty.svg'
import starFilled from './assets/star-filled.svg'

export const RatingStars = ({ rating }) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <img className={styles.star} src={starFilled} />
            )
        } else {
            stars.push(
                <img className={styles.star} src={starEmpty} />
            )
        }
    }

    return <div className={styles.ratingStars}>{stars}</div>
}