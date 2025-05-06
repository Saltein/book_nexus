import { useState } from 'react'
import { DefaultButton } from '../../../../shared'
import styles from './AuthForm.module.css'

const PHONE_PATTERN = '^(?=(?:.*\\d){11,})[+\\d\\s\\-\\(\\)]+$'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = new RegExp(PHONE_PATTERN);

export const AuthForm = ({ inputs = [], buttonTitle }) => {

    const [formData, setFormData] = useState({})

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value // Динамическое обновление поля по имени инпута
        }))
    }


    // TO DO вывод ошибок на экран, отправка формы
    const handleSubmit = () => {    
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
        
        console.log("Успешная (тест) регистрация", formData) 
    }

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

            <DefaultButton title={buttonTitle} color={'#8a4fff'} onClick={handleSubmit} />
        </div>
    )
}
