import styles from './FiltersDDList.module.css'

export const FiltersDDList = ({ title, optionsList }) => {
    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <select>
                {optionsList.map((option, index) => {
                    return (
                        <div key={index}>
                            <option value={option.value}>{option.title}</option>
                        </div>
                    )
                })}
            </select>
        </div>
    )
}