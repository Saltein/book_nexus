import styles from './MyExchange.module.css'
import { formatDate } from '../../../shared/lib/date/formatDate'
import { StatusIcon } from '../../../shared/ui/StatusIcon/StatusIcon'
import { useSelector } from 'react-redux'
import { getId } from '../../user/model/userSlice'
import { ModalWindow } from '../../../shared'
import { ExchangeInfoWindow } from './ExchangeInfoWindow/ExchangeInfoWindow'
import { useState } from 'react'

export const MyExchange = ({ obj, pending, accepted, update }) => {
    const created_at = formatDate(obj.created_at)
    const userId = useSelector(getId)
    const isMe = obj.Sender.id === userId

    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
            <img className={styles.cover} src={obj.Book.cover} />
            <span className={styles.createdAt}>{created_at}</span>
            <span className={styles.author}>{obj.Book.author}</span>
            <span className={styles.title}>{obj.Book.name}</span>
            <span className={styles.sender}>
                {isMe ? 'Вы → ' + obj.Recipient.name : obj.Sender.name + ' → Вы'}
            </span>

            <StatusIcon statusStr={obj.status} />
            {isOpen && (
                <ModalWindow onClose={handleClose}>
                    <ExchangeInfoWindow dataObj={obj} isMe={isMe} pending={pending} accepted={accepted} onClose={handleClose} update={update} />
                </ModalWindow>
            )}
        </div>
    )
}