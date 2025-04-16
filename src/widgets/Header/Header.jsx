import { useState } from 'react'
import { NavButton, NavTogglerButton } from '../../shared'
import styles from './Header.module.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import { NavMenu } from './ui/NavMenu/NavMenu'

const moreMenuList = [
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

    const handleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <Link to='/main'>
                    <img src={logo} />
                </Link>

                <div className={styles.nav_buttons}>
                    <NavButton title='Каталог книг' href={'/catalog'} />
                    <NavButton title='Обмен и доставка' href={'/exchange_delivery'} />
                    <NavButton title='Ещё' menuList={moreMenuList} />
                    <NavButton title='Вход/Регистрация' href={'/auth'} />
                </div>

                <div className={styles.nav_toggle}>
                    <NavTogglerButton onClick={handleMenu} />
                </div>
            </div>

            <div className={`${styles.menu} ${menuVisible ? styles.active : ''}`}>
                <NavMenu menuList={moreMenuList} onClick={handleMenu} />
            </div>
        </div>
    )
}