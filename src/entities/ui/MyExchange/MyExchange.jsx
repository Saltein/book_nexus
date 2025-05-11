import styles from './MyExchange.module.css'
import { formatDate } from '../../../shared/lib/date/formatDate'
import { StatusIcon } from '../../../shared/ui/StatusIcon/StatusIcon'
import { useSelector } from 'react-redux'
import { getId } from '../../user/model/userSlice'

export const MyExchange = ({ obj }) => {
    const created_at = formatDate(obj.created_at)
    const userId = useSelector(getId)

    return (
        <div className={styles.wrapper}>
            <img className={styles.cover} src={obj.Book.cover} />
            <span className={styles.createdAt}>{created_at}</span>
            <span className={styles.author}>{obj.Book.author}</span>
            <span className={styles.title}>{obj.Book.name}</span>
            <span className={styles.sender}>
                от {obj.Sender.id === userId ? 'Вас, к ' + obj.Recipient.name : obj.Sender.name}
            </span>

            <StatusIcon statusStr={obj.status} />
        </div>
    )
}