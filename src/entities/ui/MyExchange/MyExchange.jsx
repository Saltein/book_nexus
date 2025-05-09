import styles from './MyExchange.module.css'
import { formatDate } from '../../../shared/lib/date/formatDate'
import { StatusIcon } from '../../../shared/ui/StatusIcon/StatusIcon'

export const MyExchange = ({ obj }) => {
    const created_at = formatDate(obj.created_at)
    return (
        <div className={styles.wrapper}>
            <img className={styles.cover} src={obj.cover} />
            <span className={styles.createdAt}>{created_at}</span>
            <span className={styles.author}>{obj.author}</span>
            <span className={styles.title}>{obj.bookTitle}</span>
            <span className={styles.sender}>от {obj.sender}</span>

            <StatusIcon statusStr={obj.status} />
        </div>
    )
}