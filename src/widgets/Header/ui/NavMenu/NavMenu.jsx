import { NavButton } from '../../../../shared'
import styles from './NavMenu.module.css'

export const NavMenu = ({ onClick, role, isLogged }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <NavButton title='Главная' href={'/main'} onClick={onClick} />
                {(role === 'moderator' || role === 'admin') && <NavButton title='Панель модератора' href={'/moderation'} />}
                <NavButton title='Каталог книг' href={'/catalog'} onClick={onClick} />
                <NavButton title='Обмен и доставка' href={'/exchange_delivery'} onClick={onClick} />
                <NavButton title='Отзывы' href={'/reviews'} onClick={onClick} />
                <NavButton title='Правила сервиса' href={'/service_rules'} onClick={onClick} />
                {isLogged
                    ? <NavButton title='Профиль' href={'/profile'} />
                    : <NavButton title='Вход/Регистрация' href={'/auth'} />
                }
            </div>
        </div>
    )
}