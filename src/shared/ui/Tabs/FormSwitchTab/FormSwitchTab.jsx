import styles from './FormSwitchTab.module.css'

export const FormSwitchTab = ({ title, onClick, name, currentTab }) => {
    const handleTab = () => {
        onClick(name)
    }

    return (
        <div className={`${styles.wrapper} ${currentTab === name && styles.active}`} onClick={handleTab}>
            <span className={styles.title}>
                {title}
            </span>
        </div>
    )
}