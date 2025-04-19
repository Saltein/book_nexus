import { useNavigate } from 'react-router-dom'
import styles from './GoBackButton.module.css'
import backIcon from './assets/back.svg'

export const GoBackButton = ({ title, href }) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        if (href) {
            navigate(href)
        }
    }

    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={backIcon} />
            <div className={styles.button} onClick={handleClick}>{title}</div>
        </div>
    )
}