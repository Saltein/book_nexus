import { useState } from 'react'
import { AuthFormSwitcher } from '../../features/auth/ui'
import { ModalWindow } from '../../shared'
import { GoBackButton } from '../../shared/ui/Buttons/GoBackButton/GoBackButton'
import styles from './AuthPage.module.css'

export const AuthPage = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonCon}>
                <GoBackButton title={'На главную'} href={'/main'} />
            </div>

            <AuthFormSwitcher />

        </div>
    )
}