import { NavButton } from '../../../../shared'
import styles from './NavMenu.module.css'

export const NavMenu = ({onClick}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <NavButton title='Главная' href={'/main'} onClick={onClick} />
                <NavButton title='Каталог книг' href={'/catalog'} onClick={onClick} />
                <NavButton title='Обмен и доставка' href={'/exchange_delivery'} onClick={onClick} />
                <NavButton title='Отзывы' href={'/reviews'} onClick={onClick} />
                <NavButton title='Правила сервиса' href={'/service_rules'} onClick={onClick} />
                <NavButton title='Вход/Регистрация' href={'/auth'} onClick={onClick} />
            </div>
        </div>
    )
}