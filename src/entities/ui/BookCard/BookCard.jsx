import styles from './BookCard.module.css'
import { DefaultButton, DefaultDivider, ModalWindow } from '../../../shared/ui'
import { useState } from 'react'
import { BookCardModal } from './BookCardModal/BookCardModal'

export const BookCard = ({ bookData, isMyBook = false, isAdmin = false }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.wrapper_of_wrapper} onClick={() => setIsOpen(true)}>
            <div className={styles.wrapper}>

                <div className={styles.coverWrapper}>
                    <img
                        className={styles.cover}
                        src={bookData.img_url}
                        onError={(e) => {
                            e.target.onerror = null // предотвращает бесконечный цикл в случае, если заглушка тоже не загрузится
                            e.target.src = 'https://imgholder.ru/400x700/8493a8/adb9ca&text=Фото+обложки&font=kelson' // путь к заглушке
                        }}
                        alt={bookData.name}
                    />
                </div>

                <div className={styles.bookInfo}>
                    <div className={styles.title_author}>
                        <h3 className={styles.title}>{bookData.name}</h3>
                        <p className={styles.author}>{bookData.author}</p>
                    </div>
                    <span className={styles.year}>{bookData.year}</span>
                    <DefaultDivider />
                    <span className={styles.genre}>{bookData.Genre.name}</span>
                </div>

                {!isMyBook && !isAdmin &&
                    <div className={styles.buttonCon}>
                        <DefaultButton title={'Забронировать'} />
                    </div>
                }

                {isOpen ?
                    <ModalWindow onClose={onClose}>
                        <BookCardModal bookData={bookData} isMyBook={isMyBook} isAdmin={isAdmin} isInCatalog={!isMyBook && !isAdmin} />
                    </ModalWindow>
                    : <></>
                }
            </div>
        </div>
    )
}