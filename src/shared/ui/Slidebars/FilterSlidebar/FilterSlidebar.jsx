import { useEffect, useState } from 'react'
import styles from './FilterSlidebar.module.css'

export const FilterSlidebar = ({ title, min, max, step, value, onChange }) => {

    const [currentValue, setCurrentValue] = useState([value - step, value])
    const [any, setAny] = useState(false)

    const handleBoxChange = () => {
        setAny(!any)
    }

    const handleSlideChange = (e) => {
        if (!any) {
            const newValue = parseInt(e.target.value)
            const newRange = ([newValue, parseInt(newValue) + step])
            // сравниваем с текущим
            if (currentValue[0] !== newRange[0] || currentValue[1] !== newRange[1]) {
                setCurrentValue(newRange)
            }
        }
    }

    useEffect(() => {
        onChange(currentValue)
    }, [currentValue])

    useEffect(() => {
        any ? setCurrentValue([min, max]) : setCurrentValue([min, min + step])
    }, [any])

    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <div className={styles.inputs}>
                <div className={styles.checkboxCon}>
                    <input className={styles.checkbox} type='checkbox' value={any} onChange={handleBoxChange} />
                    <span>Любой</span>
                </div>

                <input className={`${styles.slider} ${any ? styles.disabled : ''}`} type='range'
                    min={min} max={max - max % step} step={step}
                    value={currentValue[0]} onChange={handleSlideChange}
                />
            </div>
            <div className={styles.valueCon}>
                <span className={`${any ? styles.disabled : ''}`}>
                    {currentValue[0]} - {(parseInt(currentValue[0]) + step) > max ? (max) : (parseInt(currentValue[0]) + step)}
                </span>
            </div>
        </div>
    )
}