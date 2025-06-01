import { useRef, useState } from 'react'
import styles from './ReservationModal.module.css'
import { DefaultButton } from '../../../../shared'
import { getDelivery } from '../../../dictionaries/delivery/deliverySlice'
import { useSelector } from 'react-redux'
import { getEmail, getId } from '../../../user/model/userSlice'
import { exchangesApi } from '../../../../shared/api/exchangesApi'
import { useNavigate } from 'react-router-dom'

export const ReservationModal = ({ onClose, bookId, senderId }) => {
    const textareaRef = useRef()
    const navigate = useNavigate()

    const deliveryMethods = useSelector(getDelivery)
    const userEmail = useSelector(getEmail)
    const userId = useSelector(getId)

    const [message, setMessage] = useState('')
    const [deliveryMethod, setDeliveryMethod] = useState('0')
    const [warning, setWarning] = useState('')

    const isFormValid = () => {
        return message.length > 0 && Number(deliveryMethod) != '0'
    }

    const handleInput = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    const handleSubmit = async () => {
        if (!localStorage.getItem('user')) {
            navigate('/auth')
        }
        console.log('data', bookId, senderId, userId, deliveryMethod, message + `\n Email для связи ${userEmail}`)
        if (isFormValid()) {
            try {
                const response = await exchangesApi.create(bookId, senderId, userId, deliveryMethod, message + `\n Email для связи ${userEmail}`)
                if (!response) {
                    console.log('Неизвестная ошибка отправки запроса')
                    return
                }
                onClose()
            } catch (error) {
                console.error("Ошибка отправки запроса:", error)
                setWarning('Ошибка отправки запроса')
            }
        } else {
            setWarning('Заполните все формы')
        }
    }

    return (
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.label}>Напишите сообщение владельцу книги</h3>
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

            <p className={styles.prevention}>
                * В конце вашего сообщения автоматически добавится адрес вашей электронной почты
            </p>

            <select
                className={`${styles.delivery} ${styles.input}`}
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
            >
                <option value={0} >Выберите способ обмена</option>
                {deliveryMethods.map((g) => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>

            {warning && <span className={styles.warning}>{warning}</span>}

            <DefaultButton title={"Забронировать"} color={'#8a4fff'} onClick={handleSubmit} />
        </div>
    )
}