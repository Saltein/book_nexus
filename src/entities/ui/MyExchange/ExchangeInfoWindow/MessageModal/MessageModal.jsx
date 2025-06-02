import styles from './MessageModal.module.css'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getId } from '../../../../user/model/userSlice'
import { DefaultButton } from '../../../../../shared'
import { exchangesApi } from '../../../../../shared/api/exchangesApi'
import { reportsApi } from '../../../../../shared/api/reportsApi'

export const MessageModal = ({ onClose, message_from, exchangeId, onSubmit, isReport = false, dataObj }) => {
    const textareaRef = useRef()

    const [warning, setWarning] = useState('')
    const [message, setMessage] = useState('')
    const userId = useSelector(getId)

    const reportedId = (userId, senderId, recipientId) => {
        return userId === senderId ? recipientId : senderId
    }

    const isFormValid = () => {
        return message.length > 0
    }

    const handleInput = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    const handleSubmit = async () => {
        if (isFormValid()) {
            try {
                let response = null
                if (isReport) {
                    response = await reportsApi.newReport(reportedId(userId, dataObj.Sender.id, dataObj.Recipient.id), userId, message)
                } else {
                    response = await exchangesApi.changeResponseMessage(exchangeId, message)
                }
                if (!response) {
                    console.log('Неизвестная ошибка отправки ответа')
                    return
                }
                onSubmit()
                onClose()
            } catch (error) {
                console.error("Ошибка отправки ответа:", error)
                setWarning('Ошибка отправки ответа')
            }
        } else {
            setWarning('Заполните форму')
        }
    }


    return (
        <div className={styles.wrapper}>
            <h3 className={styles.label}>{isReport ? 'Напишите причину жалобы' : 'Напишите ответное сообщение'}</h3>
            {!isReport &&
                <div className={styles.messageBox}>
                    <div className={styles.avatar} />
                    <span className={styles.messageFrom}>{message_from}</span>
                </div>}

            <textarea
                ref={textareaRef}
                className={styles.message}
                onInput={handleInput}
                rows={1}
                onChange={(e) => {
                    setWarning('')
                    setMessage(e.target.value)
                }}
                placeholder={isReport ? 'Причина' : 'Сообщение'}
            />

            {warning && <span className={styles.warning}>{warning}</span>}

            {isReport
                ? <DefaultButton title={'Пожаловаться'} onClick={handleSubmit} color={'#F44336'} />
                : <DefaultButton title={'Ок'} onClick={handleSubmit} />
            }
        </div>
    )
}