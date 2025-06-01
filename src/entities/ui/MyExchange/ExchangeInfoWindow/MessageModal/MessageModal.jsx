import { useEffect, useRef, useState } from 'react'
import styles from './MessageModal.module.css'
import { useSelector } from 'react-redux'
import { getDelivery } from '../../../../dictionaries/delivery/deliverySlice'
import { getEmail, getId } from '../../../../user/model/userSlice'
import { DefaultButton } from '../../../../../shared'
import { exchangesApi } from '../../../../../shared/api/exchangesApi'

export const MessageModal = ({ onClose, message_from, exchangeId, onSubmit }) => {
    const textareaRef = useRef()

    const [warning, setWarning] = useState('')
    const [message, setMessage] = useState('')

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
                const response = await exchangesApi.changeResponseMessage(exchangeId, message)
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
            <h3 className={styles.label}>Напишите ответное сообщение</h3>
            <div className={styles.messageBox}>
                <div className={styles.avatar} />
                <span className={styles.messageFrom}>{message_from}</span>
            </div>

            <textarea
                ref={textareaRef}
                className={styles.message}
                onInput={handleInput}
                rows={1}
                onChange={(e) => {
                    setWarning('')
                    setMessage(e.target.value)
                }}
                placeholder='Сообщение'
            />

            {warning && <span className={styles.warning}>{warning}</span>}

            <DefaultButton title={'Ок'} onClick={handleSubmit} />
        </div>
    )
}