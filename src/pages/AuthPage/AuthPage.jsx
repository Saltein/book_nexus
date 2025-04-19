import { AuthFormSwitcher } from '../../features/auth/ui'
import { GoBackButton } from '../../shared/ui/Buttons/GoBackButton/GoBackButton'
import styles from './AuthPage.module.css'

export const AuthPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonCon}>
                <GoBackButton title={'На главную'} href={'/main'} />
            </div>

            <AuthFormSwitcher />
        </div>
    )
}