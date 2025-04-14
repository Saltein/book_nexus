import styles from './FiltersDDList.module.css'

export const FiltersDDList = ({ title, optionsList }) => {
    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <select className={styles.select}>
                {optionsList.map((option, index) => {
                    return (
                        <option className={styles.option} key={index} value={option.value}>
                            {option.title}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}