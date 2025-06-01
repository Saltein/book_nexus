import { useRef, useState } from 'react'
import styles from './BanWindow.module.css'
import { DefaultButton } from '../../../../../shared'
import { userApi } from '../../../../../shared/api/userApi'

export const BanWindow = ({ userData, onClose, onBan }) => {
    const textareaRef = useRef()

    const [reason, setReason] = useState('')

    const handleBan = async () => {
        try {
            const response = userApi.ban(userData.id, reason)
            if (onBan) onBan()
            onClose()
        } catch (error) {
            console.log('Ошибка блокировки пользователя')
        }
    }

    const handleInput = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    return (
        <div className={styles.wrapper}>
            <h3>Причина блокировки</h3>
            <textarea ref={textareaRef} className={styles.reason} onInput={handleInput} rows={1} onChange={(e) => setReason(e.target.value)} />
            <DefaultButton onClick={handleBan} title={"Заблокировать"} />
        </div>
    )
}