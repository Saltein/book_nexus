import React, { useState } from 'react';
import styles from './RatingStars.module.css';
import starEmpty from './assets/star-empty.svg'
import starFilled from './assets/star-filled.svg'

export const RatingStars = ({ rating, starSize = '24px', rateable = false, onRate }) => {
    // Локальный стейт для хранения индекса наведённой звезды
    const [hoverRating, setHoverRating] = useState(0);

    // Функция для отрисовки текущего состояния звёзд:
    // либо базового рейтинга, либо рейтинга при наведении
    const getDisplayRating = () => (rateable && hoverRating ? hoverRating : rating);

    const displayRating = getDisplayRating();

    return (
        <div className={styles.ratingStars}>
            {Array.from({ length: 5 }, (_, i) => {
                const idx = i + 1;
                const isFilled = idx <= displayRating;

                // Обработчики наведений и клика (только если rateable)
                const handlers = rateable
                    ? {
                        onMouseEnter: () => setHoverRating(idx),
                        onMouseLeave: () => setHoverRating(0),
                        onClick: () => onRate && onRate(idx),
                    }
                    : {};

                return (
                    <img
                        key={idx}
                        className={styles.star}
                        src={isFilled ? starFilled : starEmpty}
                        style={{ width: starSize, cursor: rateable ? 'pointer' : 'default' }}
                        {...handlers}
                    />
                );
            })}
        </div>
    );
};