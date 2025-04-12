import { ExchangeExampleList } from '../../widgets'
import styles from './MainPage.module.css'
import aboutImage from './assets/about_hero.jpg'


export const MainPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.preview}>
                <img className={styles.aboutImage} src={aboutImage} />
            </div>
            <ExchangeExampleList />
        </div>
    )
}