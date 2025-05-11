import { useSelector } from 'react-redux'
import { DefaultDivider } from '../../../../shared'
import { formatStatus } from '../../../../shared/lib/status/formatStatus'
import { StatusIcon } from '../../../../shared/ui/StatusIcon/StatusIcon'
import styles from './ExchangeInfoWindow.module.css'
import { getId } from '../../../user/model/userSlice'
import { formatDate } from '../../../../shared/lib/date/formatDate'

export const ExchangeInfoWindow = ({ dataObj }) => {
    const userId = useSelector(getId)

    return (
        <div className={styles.wrapper}>
            <div className={styles.coverDiv}>
                <img className={styles.cover} src={dataObj.Book.cover} />
            </div>
            <div className={styles.description}>
                <div className={styles.status}>
                    <StatusIcon statusStr={dataObj.status} />
                    <span className={styles.statusText}>{formatStatus(dataObj.status)}</span>
                </div>
                <div className={styles.descBlock}>
                    <span className={styles.author}>{dataObj.Book.author}</span>
                    <span className={styles.title}>{dataObj.Book.name}</span>

                    <DefaultDivider />

                    <div className={styles.sender}>
                        <span className={styles.d}>Отправитель: </span>
                        {dataObj.Sender.id === userId ? 'Вы' : dataObj.Sender.name}
                    </div>
                    <div className={styles.recipient}>
                        <span className={styles.d}>Получатель: </span>
                        {dataObj.Recipient.id === userId ? 'Вы' : dataObj.Recipient.name}
                    </div>
                    <div className={`${styles.created_at} ${styles.d}`}>
                        <span className={styles.d}>Дата создания: </span>
                        {formatDate(dataObj.created_at, true)}
                    </div>
                    <div className={`${styles.created_at} ${styles.d}`}>
                        <span className={styles.d}>Дата завершения: </span>
                        {dataObj.completed_at ? formatDate(dataObj.completed_at, true) : '-'}
                    </div>
                    <div className={`${styles.delivery} ${styles.d}`}>
                        <span className={styles.d}>Метод доставки: </span>
                        {dataObj.deliveryMethod}
                    </div>

                    <DefaultDivider />

                    <div className={`${styles.message} ${styles.d}`}>
                        <span className={styles.d}>Сообщение отправителя: </span>
                        "{dataObj.request_message}"
                    </div>
                    <div className={`${styles.message} ${styles.d}`}>
                        <span className={styles.d}>Сообщение получателя: </span>
                        "{dataObj.response_message}"
                    </div>
                </div>
            </div>
        </div>
    )
}