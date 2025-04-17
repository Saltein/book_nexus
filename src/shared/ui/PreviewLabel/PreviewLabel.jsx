import styles from './PreviewLabel.module.css'

export const PreviewLabel = ({ title, description }) => {
    return (
        <div className={styles.preview}>
            <h1 className={styles.h}>{title}</h1>
            <p className={styles.p}>{description}</p>
        </div>
    )
}