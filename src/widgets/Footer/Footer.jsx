import styles from './Footer.module.css'
import logo from './assets/logo.png'

export const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoList}>

                <div className={styles.infoBlock}>
                    <div className={styles.logoDiv}><img src={logo} /></div>
                    <p>
                        Этот сайт создан для обмена книг между пользователями.
                    </p>
                    <div>
                        <p>tazovskij8@gmail.com</p>
                        <p>+7(950)852-40-09</p>
                        <p>1А улица Гагарина</p>
                    </div>
                </div>

                <div className={styles.infoBlock}>
                    <h4>Книгообменник</h4>
                    <div className={styles.linkList}>
                        <a>Какие плюсы и минусы сервиса?</a>
                        <a>Как мне безопасно обмениваться?</a>
                        <a>Как выбрать место встречи?</a>
                        <a>Каталог книг</a>
                        <a>О сервисе</a>
                    </div>
                </div>
                
            </div>

            <div className={styles.divider}/>

            <div className={styles.copyright}>
                <span className={styles.c}>Copyright ©2025 <b>Все права защищены</b></span>
            </div>
        </div>
    )
}