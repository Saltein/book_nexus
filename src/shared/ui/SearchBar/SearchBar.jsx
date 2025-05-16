import { DefaultButton } from '../Buttons/DefaultButton/DefaultButton'
import styles from './SearchBar.module.css'

export const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" placeholder='Поиск' />
            <DefaultButton title={'Найти'} height='40px' />
        </div>
    )
}