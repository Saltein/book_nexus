import { DefaultButton } from '../../../../../shared'
import styles from './BanWarningWindow.module.css'

export const BanWarningWindow = ({ reason, onClose }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.banTitle}>Вы были <span className={styles.banAccent}>заблокированы</span> по причине:</h3>
            <div className={styles.banReason}>
                {reason}
            </div>
            <DefaultButton title={'Смириться'} color={'#8a4fff'} border_radius='10px' onClick={onClose}/>
        </div>
    )
}