import { useSelector } from 'react-redux'
import { DefaultButton, DefaultDivider } from '../../../../shared'
import { formatStatus } from '../../../../shared/lib/status/formatStatus'
import { StatusIcon } from '../../../../shared/ui/StatusIcon/StatusIcon'
import styles from './ExchangeInfoWindow.module.css'
import { getId } from '../../../user/model/userSlice'
import { formatDate } from '../../../../shared/lib/date/formatDate'
import { exchangesApi } from '../../../../shared/api/exchangesApi'

export const ExchangeInfoWindow = ({ dataObj, isMe, pending, accepted, onClose, update }) => {
    const userId = useSelector(getId)
    const colors = {
        red: '#F44336',
        green: '#4CAF50',
        yellow: '#FFC107',
    }

    const handleClick = async (status) => {
        try {
            const response = await exchangesApi.changeStatus(dataObj.id, status)
            if (!response) {
                console.log('Неизвестная ошибка обновления статуса обмена')
                return
            }
            onClose()
            update()
        } catch (error) {
            console.error("Ошибка обновления статуса обмена", error)
        }
    }
    const handleDelete = async () => {
        try {
            const response = await exchangesApi.delete(dataObj.id)
            if (!response) {
                console.log('Неизвестная ошибка удаления обмена')
                return
            }
            onClose()
            update()
        } catch (error) {
            console.error("Ошибка удаления обмена", error)
        }
    }

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
                {(pending || accepted) &&
                    <div className={styles.buttons}>
                        {isMe && accepted &&
                            <>
                                <DefaultButton title={'Отменить'} onClick={() => handleClick('rejected')} color={colors.red} height='40px' />
                            </>
                        }
                        {!isMe && accepted &&
                            <>
                                <DefaultButton title={'Завершить'} onClick={() => handleClick('completed')} color={colors.green} height='40px' />
                                <DefaultButton title={'Отменить'} onClick={() => handleClick('rejected')} color={colors.red} height='40px' />
                            </>
                        }
                        {isMe && pending &&
                            <>
                                <DefaultButton title={'Принять'} onClick={() => handleClick('accepted')} color={colors.yellow} brightText={false} height='40px' />
                                <DefaultButton title={'Отклонить'} onClick={() => handleClick('rejected')} color={colors.red} height='40px' />
                            </>
                        }
                        {!isMe && pending &&
                            <>
                                <DefaultButton title={'Удалить'} onClick={() => handleDelete()} color={colors.red} height='40px' />
                            </>
                        }
                    </div>
                }
            </div>
        </div>
    )
}