import { useState } from 'react'
import { NavButton, NavTogglerButton } from '../../shared'
import styles from './Header.module.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const menuList = [
    {
        title: 'Отзывы',
        href: '/reviews'
    },
    {
        title: 'Правила сервиса',
        href: 'service_rules'
    }
]

export const Header = (props) => {

    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link to='/main'>
                    <img src={logo} />
                </Link>
                <div className={styles.nav_buttons}>
                    <NavButton title='Каталог книг' href={'/catalog'} />
                    <NavButton title='Обмен и доставка' href={'/exchange_delivery'} />
                    <NavButton title='Ещё' menuList={menuList} />
                    <NavButton title='Вход/Регистрация' href={'/auth'} />
                </div>
                <div className={styles.nav_toggle}>
                    <NavTogglerButton onClick={setMenuVisible} />
                </div>
            </div>
        </div>
    )
}