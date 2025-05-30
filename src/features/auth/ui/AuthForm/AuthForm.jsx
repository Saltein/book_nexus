import styles from './AuthForm.module.css'
import { useEffect, useState } from 'react'
import { DefaultButton, ModalWindow } from '../../../../shared'
import { useDispatch, useSelector } from 'react-redux';
import { authApi } from '../../../../shared/api/authApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../app/context/AuthContext';
import { getId, setBanned, setBanReason, setEmail, setId, setRole } from '../../../../entities/user/model/userSlice';
import { isValidEmail } from '../../../../shared/lib/email/isValidEmail';
import { ForgotPasswordWindow } from './ForgotPasswordWindow/ForgotPasswordWindow';
import { logout } from '../../../../app/model/authSlice';
import { BanWarningWindow } from './BanWarningWindow/BanWarningWindow';
import { userApi } from '../../../../shared/api/userApi';

const PHONE_PATTERN = '^(?=(?:.*\\d){11,})[+\\d\\s\\-\\(\\)]+$'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = new RegExp(PHONE_PATTERN);

export const AuthForm = ({ inputs = [], buttonTitle, isLogin = false, setCurrentTab = () => { }, tabs = [] }) => {

    const { login } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userId = useSelector(getId)

    let formattedFormData

    const [formData, setFormData] = useState({})
    const [warning, setWarning] = useState('')
    const [codeStatus, setCodeStatus] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isBanMessageOpen, setBanMessageOpen] = useState(false)
    const [banReason, setBanReason] = useState('')

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value // Динамическое обновление поля по имени инпута
        }))
    }

    const handleRegister = async () => {
        console.log(formData)

        if (Object.keys(formData).length !== 8) {
            setWarning('Заполните все поля')
            return
        }

        if (!EMAIL_REGEX.test(formData.email)) {
            setWarning("Некорректный email")
            return;
        }

        if (!PHONE_REGEX.test(formData.phone)) {
            setWarning("Некорректный номер телефона")
            return;
        }

        if (formData.password !== formData.passwordCheck) {
            setWarning("Пароли не совпадают")
            return
        }

        try {
            let response = await authApi.register(formattedFormData);
            if (response) {
                console.log("Успешная (тест) регистрация", formattedFormData, response)
                setCurrentTab(tabs[0])
            } else {
                console.log("Ошибка регистрации")
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error.message);
            setWarning(`Ошибка регистрации: ${error.message}`);
        }

        console.log("Успешная (тест) регистрация", formattedFormData)
    }

    const handleLogin = async () => {
        try {
            let response = await authApi.login(formData)
            if (response) {
                const user = response.user
                console.log(user)

                // Redux
                dispatch(setId(user.id))
                dispatch(setEmail(user.email))
                dispatch(setRole(user.role))
                dispatch(setBanned(user.is_blocked))
                // dispatch(setBanReason(user.))

                // Local Storage
                localStorage.setItem('user', JSON.stringify({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    banned: user.is_blocked,
                }));

                if (user.is_blocked) {
                    dispatch(logout())
                    setBanMessageOpen(true)
                    fetchBanReason()
                } else {
                    login(user); // если login также сохраняет токен
                    navigate('/main');
                }

            } else {
                console.error("Ошибка входа:", response?.message || "Неизвестная ошибка")
            }

        } catch (error) {
            console.error('Ошибка входа:', error.message)
        }
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
                } else {
                    setCodeStatus(0)
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

    const fetchBanReason = async () => {
        try {
            const response = await userApi.getBanReason(userId)
            setBanReason(response.blocked_reason)
            console.log(response)
        } catch (error) {
            console.log('Ошибка получения причины блокировки')
        }
    }

    useEffect(() => {
        formattedFormData = {
            "account": {
                "email": formData.email,
                "password": formData.password
            },
            "profile": {
                "name": formData.fullName,
                "phone": formData.phone,
                "birthday": formData.dateOfBirth,
                "city": formData.city,
            }
        }
    }, [formData])


    return (
        <div className={styles.wrapper}>
            <div className={styles.inputs}>
                {inputs.map((input, index) => {
                    const isTel = input.type === 'tel'
                    return (
                        input.name === 'confirmationCode' || (input.name === 'email' && !isLogin)
                            ?
                            <div key={index} className={styles.confirmationCode}>
                                <input
                                    maxLength={input.name === 'confirmationCode' ? 6 : 64}
                                    onChange={handleOnChange}
                                    name={input.name}
                                    key={index}
                                    className={`${styles.input} ${styles.code}`}
                                    type={input.type}
                                    placeholder={isTel ? 'Телефон' : input.placeholder}
                                />
                                {input.name === 'confirmationCode'
                                    ?
                                    <DefaultButton
                                        title={codeStatus === 2 ? 'Почта подтверждена' : 'Проверить'}
                                        color={codeStatus === 2 ? '#5dbea3' : '#8a4fff'}
                                        height='40px'
                                        onClick={handleCheckCode}
                                    />
                                    :
                                    <DefaultButton
                                        title={codeStatus ? 'Код отправлен' : 'Отправить код'}
                                        color={codeStatus ? '#5dbea3' : '#8a4fff'}
                                        height='40px'
                                        onClick={handleSendCode}
                                    />
                                }
                            </div>
                            :
                            <input
                                onChange={handleOnChange}
                                name={input.name}
                                key={index}
                                className={styles.input}
                                type={input.type}
                                placeholder={isTel ? 'Телефон' : input.placeholder}
                                {...(isTel && {
                                    inputMode: 'tel',                        // Показывает цифровую клавиатуру на моб. устройствах
                                    pattern: PHONE_PATTERN,                  // Регулярка для гибкого ввода телефона
                                    title:
                                        'Номер телефона: минимум 7 цифр. Допускаются +, пробелы, дефисы, скобки.',
                                })}
                            />
                    )
                })}
                {!isLogin && <div className={styles.warningBox}>
                    {warning && <span className={styles.warning}>{warning}</span>}
                </div>}
                {isLogin && <a className={styles.forgetPass} onClick={() => setIsOpen(true)}>Забыли пароль?</a>}
                {isLogin && isOpen &&
                    <ModalWindow onClose={() => setIsOpen(false)}>
                        <ForgotPasswordWindow />
                    </ModalWindow>
                }
                {isBanMessageOpen &&
                    <ModalWindow onClose={() => setBanMessageOpen(false)}>
                        <div className={styles.banMessage}>
                            <BanWarningWindow reason={banReason} onClose={() => setBanMessageOpen(false)} />
                        </div>
                    </ModalWindow>
                }
            </div>

            <DefaultButton title={buttonTitle} color={'#8a4fff'} onClick={isLogin ? handleLogin : handleRegister} />
        </div>
    )
}
