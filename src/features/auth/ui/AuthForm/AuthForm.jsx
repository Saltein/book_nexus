import { useEffect, useState } from 'react'
import { DefaultButton } from '../../../../shared'
import styles from './AuthForm.module.css'
import { useDispatch } from 'react-redux';
import { authApi } from '../../../../shared/api/authApi';
import { loginUser } from '../../model/authActions'
import { useNavigate } from 'react-router-dom';

const PHONE_PATTERN = '^(?=(?:.*\\d){11,})[+\\d\\s\\-\\(\\)]+$'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = new RegExp(PHONE_PATTERN);

export const AuthForm = ({ inputs = [], buttonTitle, isLogin = false, setCurrentTab = () => { }, tabs = [] }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let formattedFormData

    const [formData, setFormData] = useState({})

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value // Динамическое обновление поля по имени инпута
        }))
    }


    // TO DO вывод ошибок на экран, отправка формы
    const handleRegister = async () => {
        console.log(formData)

        if (Object.keys(formData).length !== 7) {
            console.log("Заполните все поля!", formData.length)
            return
        }

        if (!EMAIL_REGEX.test(formData.email)) {
            console.log("Некорректный email");
            return;
        }

        if (!PHONE_REGEX.test(formData.phone)) {
            console.log("Некорректный номер телефона");
            return;
        }

        if (formData.password !== formData.passwordCheck) {
            console.log("Пароли не совпадают")
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
            console.log(`Ошибка регистрации: ${error.message}`)
        }

        console.log("Успешная (тест) регистрация", formattedFormData)
    }

    const handleLogin = async () => {
        console.log('')

        try {
            const { email, password } = formData;
            await dispatch(loginUser({ email, password }));
            const response = await authApi.check()
            if (response) {
                console.log("👍")
                response.data.isAuthenticated ? navigate('/main') : console.log('👎')
            } else {
                console.log("Ошибка авторизации")
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error.message);
            console.log(`Ошибка авторизации: ${error.message}`)
        }
    }

    useEffect(() => {
        formattedFormData = {
            "account": {
                "name": formData.fullName,
                "email": formData.email,
                "password": formData.password
            },
            "profile": {
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
            </div>

            <DefaultButton title={buttonTitle} color={'#8a4fff'} onClick={isLogin ? handleLogin : handleRegister} />
        </div>
    )
}
