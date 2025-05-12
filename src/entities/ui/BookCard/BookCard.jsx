import styles from './BookCard.module.css'
import { DefaultButton, DefaultDivider } from '../../../shared/ui'

export const BookCard = ({img_url, name, author, year, Genre}) => {
    return (
        <div className={styles.wrapper_of_wrapper}>
            <div className={styles.wrapper}>

                <div className={styles.coverWrapper}>
                    <img className={styles.cover} src={img_url} />
                </div>

                <div className={styles.bookInfo}>
                    <div className={styles.title_author}>
                        <h3 className={styles.title}>{name}</h3>
                        <p className={styles.author}>{author}</p>
                    </div>
                    <span className={styles.year}>{year}</span>
                    <DefaultDivider />
                    <span className={styles.genre}>{Genre.name}</span>
                </div>

                <div className={styles.buttonCon}>
                    <DefaultButton title={'Забронировать'} />
                </div>
            </div>
        </div>
    )
}