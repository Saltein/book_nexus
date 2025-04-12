import { NavButton, NavTogglerButton } from '../../shared'
import styles from './Header.module.css'
import logo from './assets/logo.png'

const menuList = [
    {
        title: 'Отзывы',
        href: '#'
    },
    {
        title: 'Правила сервиса',
        href: '#'
    }
]

export const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <a>
                    <img src={logo} />
                </a>
                <div className={styles.nav_buttons}>
                    <NavButton title='Каталог книг' />
                    <NavButton title='Обмен и доставка' />
                    <NavButton title='Ещё' menuList={menuList} />
                    <NavButton title='Вход/Регистрация' />
                </div>
                <div className={styles.nav_toggle}>
                    <NavTogglerButton />
                </div>
            </div>
        </div>
    )
}