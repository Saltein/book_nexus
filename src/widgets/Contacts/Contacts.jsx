import { ContactItem } from '../../shared'
import styles from './Contacts.module.css'
import locIcon from './assets/location.svg'
import mailIcon from './assets/mail.svg'
import timeIcon from './assets/time.svg'
import vkIcon from './assets/vk.svg'
import telegramIcon from './assets/telegram.svg'

export const Contacts = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contactFrame}>
                <div className={styles.subframe}>
                    <h2>Наши контакты</h2>
                    <div className={styles.contactInfo}>
                        <ContactItem icon={locIcon} infoList={['г. Ростов-на-Дону, ул. Гагарина, д. 1', '(ДГТУ)']} />
                        <ContactItem icon={timeIcon} infoList={['Пн-Пт: 10:00 - 20:00', 'Сб-Вс: 11:00 - 18:00']} />
                        <ContactItem infoList={['+7 (950) 852-40-09', '+7 (952) 588-12-43']} />
                        <ContactItem icon={mailIcon} infoList={['tazovskij8@gmail.com', 'tisochenko@inbox.ru']} />
                    </div>
                    <div className={styles.socialLinks}>
                        <a href="https://vk.com/timastic163"><img src={vkIcon} /></a>
                        <a href="https://t.me/greeatestperson18"><img src={telegramIcon} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}