import styles from './BookCard.module.css'
import { DefaultButton, DefaultDivider } from '../../../shared/ui'

export const BookCard = ({bookCover, bookTitle, bookAuthor, bookYear, bookGenre}) => {
    return (
        <div className={styles.wrapper_of_wrapper}>
            <div className={styles.wrapper}>

                <div className={styles.coverWrapper}>
                    <img className={styles.cover} src={bookCover} />
                </div>

                <div className={styles.bookInfo}>
                    <div className={styles.title_author}>
                        <h3 className={styles.title}>{bookTitle}</h3>
                        <p className={styles.author}>{bookAuthor}</p>
                    </div>
                    <span className={styles.year}>{bookYear}</span>
                    <DefaultDivider />
                    <span className={styles.genre}>{bookGenre}</span>
                </div>

                <div className={styles.buttonCon}>
                    <DefaultButton title={'Забронировать'} />
                </div>
            </div>
        </div>
    )
}