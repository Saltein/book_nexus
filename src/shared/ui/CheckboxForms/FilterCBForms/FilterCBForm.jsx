import styles from './FilterCBForm.module.css'

export const FilterCBForm = ({ title, optionsList }) => {
    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <div className={styles.optionsList}>
                {optionsList.map((option, index) => {
                    return (
                        <div className={styles.option} key={index}>
                            <input className={styles.checkbox} type='checkbox' value={option.value} />
                            <span className={styles.optionTitle}>{option.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}