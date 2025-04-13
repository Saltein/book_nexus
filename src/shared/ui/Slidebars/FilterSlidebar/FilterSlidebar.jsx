import { useState } from 'react'
import styles from './FilterSlidebar.module.css'

export const FilterSlidebar = ({ title, min, max, step, value }) => {

    const [currentValue, setCurrentValue] = useState(value)

    const handleChange = (e) => {
        setCurrentValue(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <input type='range' min={min} max={max} step={step} value={currentValue} onChange={handleChange} />
            <div className={styles.valueCon}>
                <span>{currentValue} - {(parseInt(currentValue) + 10) > max ? (max) : (parseInt(currentValue) + 10)}</span>
            </div>
        </div>
    )
}