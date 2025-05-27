import styles from './FiltersDDList.module.css'

export const FiltersDDList = ({ title, optionsList, onChange }) => {

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <select className={styles.select} onChange={handleChange}>
                <option className={styles.option} value={0}>
                    Все
                </option>
                {optionsList.map((option, index) => {
                    return (
                        <option className={styles.option} key={index} value={option.id}>
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}