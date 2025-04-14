import { useState } from 'react'
import styles from './FilterCBForm.module.css'

export const FilterCBForm = ({ title, optionsList, onChange }) => {

    const handleChange = (e) => {
        const value = e.target.value;
        const index = parseInt(e.target.dataset.index); // Получаем индекс из data-атрибута
        onChange({ value, index }); // Передаем объект с value и index
    }

    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <div className={styles.optionsList}>
                {optionsList.map((option, index) => {
                    return (
                        <div className={styles.options} key={index}>
                            <input className={styles.checkbox} type='checkbox'
                                value={option.value} onChange={handleChange} data-index={index}/>
                            <span className={styles.optionTitle}>{option.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}