import { DefaultButton, DefaultDivider } from '../../../../shared'
import { formatDate } from '../../../../shared/lib/date/formatDate'
import styles from './BookCardModal.module.css'

export const BookCardModal = ({ bookData, isAdmin = false, isMyBook = false, isInCatalog = false }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.coverDiv}>
                <img className={styles.cover} src={bookData.img_url} />
            </div>
            <div className={styles.descriptionDiv}>
                <div className={styles.descBlock}>
                    <span className={styles.author}>{bookData.author}</span>
                    <span className={styles.title}>{bookData.name}</span>
                    <span className={styles.d}>{bookData.year}</span>
                    <span className={styles.description}>{bookData.description}</span>

                    <DefaultDivider />

                    <span className={styles.genre}><span className={styles.d}>Жанр: </span>{bookData.Genre.name}</span>
                    <span className={styles.language}><span className={styles.d}>Язык: </span>{bookData.BookLanguage.name}</span>
                    <span className={styles.country}><span className={styles.d}>Страна публикации: </span>{bookData.AuthorCountry.name}</span>

                    <DefaultDivider />

                    <div className={`${styles.created_at} ${styles.d}`}>
                        <span className={styles.d}>Дата создания: </span>
                        {formatDate(bookData.created_at, true)}
                    </div>

                    {isAdmin &&
                        <>
                            <DefaultDivider />
                            <span className={styles.user}><span className={styles.d}>Владелец книги: </span>Иван Иванов</span>
                        </>}
                </div>
                {console.log('isMyBook', isMyBook)}
                {console.log('isAdmin', isAdmin)}
                {(isMyBook || isAdmin) &&
                    <div className={styles.buttonsDiv}>
                        <DefaultButton title={'Изменить'} color={"#fa0"} brightText={false} />
                        <DefaultButton title={'Удалить'} color={"#d33"} />
                    </div>}
                {isInCatalog &&
                    <DefaultButton title={'Забронировать'} />}
            </div>
        </div>
    )
}