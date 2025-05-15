import styles from './BookCard.module.css'
import { DefaultButton, DefaultDivider, ModalWindow } from '../../../shared/ui'
import { useState } from 'react'
import { BookCardModal } from './BookCardModal/BookCardModal'

export const BookCard = ({ bookData, isMyBook = false }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.wrapper_of_wrapper} onClick={() => setIsOpen(true)}>
            <div className={styles.wrapper}>

                <div className={styles.coverWrapper}>
                    <img className={styles.cover} src={bookData.img_url} />
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

                {!isMyBook &&
                    <div className={styles.buttonCon}>
                        <DefaultButton title={'Забронировать'} />
                    </div>
                }

                {isOpen & isMyBook ?
                    <ModalWindow onClose={onClose}>
                        <BookCardModal bookData={bookData} />
                    </ModalWindow>
                    : <></>
                }
            </div>
        </div>
    )
}