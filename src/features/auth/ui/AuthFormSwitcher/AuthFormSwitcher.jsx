import { useState, useEffect, useRef } from 'react'
import { FormSwitchTab } from '../../../../shared'
import styles from './AuthFormSwitcher.module.css'
import { AuthForm } from '../AuthForm/AuthForm'

const loginInputs = [
    {
        name: 'email',
        placeholder: 'Электронная почта',
        type: 'email',
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        type: 'password',
    },
]

const registrationInputs = [
    {
        name: 'fullName',
        placeholder: 'ФИО',
        type: 'text',
    },
    {
        name: 'email',
        placeholder: 'Электронная почта',
        type: 'email',
    },
    {
        name: 'phone',
        placeholder: 'Телефон',
        type: 'tel',
    },
    {
        name: 'dateOfBirth',
        placeholder: 'Дата рождения',
        type: 'date',
    },
    {
        name: 'city',
        placeholder: 'Город',
        type: 'text',
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        type: 'password',
    },
    {
        name: 'passwordCheck',
        placeholder: 'Повторите пароль',
        type: 'password',
    },
]

export const AuthFormSwitcher = () => {

    const tabs = ['login', 'registration']
    const [currentTab, setCurrentTab] = useState(tabs[0])
    const [height, setHeight] = useState(0)

    const contentRef = useRef(null)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight)
        }
    }, [currentTab])

    const handleLoginTab = (tab) => {
        setCurrentTab(tab)
    }
    const handleRegistrationTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs}>
                <FormSwitchTab title={'Вход'} onClick={handleLoginTab} name={tabs[0]} currentTab={currentTab} />
                <FormSwitchTab title={'Регистрация'} onClick={handleRegistrationTab} name={tabs[1]} currentTab={currentTab} />
            </div>

            <div
                className={styles.contentWrapper}
                style={{ height: `${height}px` }}
            >
                <div ref={contentRef}>
                    {currentTab === tabs[0] && (
                        <AuthForm buttonTitle="Войти" inputs={loginInputs} isLogin />
                    )}
                    {currentTab === tabs[1] && (
                        <AuthForm buttonTitle="Зарегистрироваться" inputs={registrationInputs} setCurrentTab={setCurrentTab} tabs={tabs} />
                    )}
                </div>
            </div>
        </div>
    )
}