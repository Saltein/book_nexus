import { useState } from 'react'
import { DefaultButton } from '../../../../../shared'
import styles from './ForgotPasswordWindow.module.css'
import { isValidEmail } from '../../../../../shared/lib/email/isValidEmail'
import { authApi } from '../../../../../shared/api/authApi'
import { userApi } from '../../../../../shared/api/userApi'
import { useSelector } from 'react-redux'
import { getId } from '../../../../../entities/user/model/userSlice'

export const ForgotPasswordWindow = ({ onClose }) => {
    const [warning, setWarning] = useState('')
    const [codeStatus, setCodeStatus] = useState(0)
    const [formData, setFormData] = useState({})
    const userId = useSelector(getId)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value // Динамическое обновление поля по имени инпута
        }))
        setWarning('')
    }

    const handleSendCode = async () => {
        const user_email = formData.email
        if (!user_email || !isValidEmail(user_email)) {
            setWarning('Неверный формат почты')
            return
        }
        try {
            const response = await authApi.sendCode(user_email)
            if (response) {
                setCodeStatus(1)
                setWarning('')
            } else {
                setWarning('Неизвестная ошибка отправки кода')
                setCodeStatus(0)
            }
        } catch (error) {
            setWarning('Ошибка отправки кода')
        }
    }

    const handleCheckCode = async () => {
        const user_email = formData.email
        const user_code = formData.confirmationCode
        if (user_email && user_code) {
            try {
                const response = await authApi.confirmCode(user_email, user_code)
                if (response) {
                    setCodeStatus(2)
                    setWarning('')
                } else {
                    setCodeStatus(0)
                    setWarning('Неизвестная ошибка проверки кода')
                }
            } catch (error) {
                if (error.message.includes('Incorrect verification code')) {
                    setWarning('Неверный проверочный код')
                } else if (error.message.includes('No code found for this email')) {
                    setWarning('На эту почту не отправлялся код')
                } else {
                    setWarning('Неизвестная ошибка отправки кода')
                }
            }
        } else {
            setWarning('Поля почты и проверочного кода должны быть заполнены')
        }
    }

    const handleSubmit = async () => {
        if (!formData.newPassword) {
            setWarning('Введите новый пароль')
            return
        }
        try {
            const response = userApi.changePass(userId, formData.newPassword)
            if (response) {
                onClose()
            } else {
                setWarning('Неизвестная ошибка смены пароля')
            }
        } catch (error) {
            console.error('Ошибка смены пароля', error)
            setWarning('Ошибка смены пароля')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputs}>
                <div className={styles.emailBox}>
                    <input
                        maxLength={64}
                        name={'email'}
                        className={`${styles.input}`}
                        onChange={handleOnChange}
                        type='email'
                        placeholder='Электронная почта'
                    />
                    <DefaultButton
                        title={codeStatus ? 'Код отправлен' : 'Отправить код'}
                        color={codeStatus ? '#5dbea3' : '#8a4fff'}
                        height='40px'
                        onClick={handleSendCode}
                    />
                </div>
                <div className={styles.codeBox}>
                    <input
                        maxLength={64}
                        name={'confirmationCode'}
                        className={`${styles.input}`}
                        onChange={handleOnChange}
                        placeholder='Код подтверждения'
                    />
                    <DefaultButton
                        title={codeStatus === 2 ? 'Почта подтверждена' : 'Проверить код'}
                        color={codeStatus === 2 ? '#5dbea3' : '#8a4fff'}
                        height='40px'
                        onClick={handleCheckCode}
                    />
                </div>
            </div>
            {codeStatus === 2 && <input
                maxLength={64}
                name={'newPassword'}
                className={`${styles.input}`}
                onChange={handleOnChange}
                type='password'
                placeholder='Новый пароль'
            />}
            {codeStatus === 2 && <DefaultButton
                title={'Сменить пароль'}
                color={'#8a4fff'}
                onClick={handleSubmit}
            />}
            {warning && <span className={styles.warning}>{warning}</span>}
        </div>
    )
}