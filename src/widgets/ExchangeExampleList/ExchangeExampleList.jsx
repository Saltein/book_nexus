import { ExchangeExample } from '../../entities'
import styles from './ExchangeExampleList.module.css'

import book1 from './tempAssets/book1.jpg';
import book2 from './tempAssets/book2.jpg';
import book3 from './tempAssets/book3.jpg';
import book4 from './tempAssets/book4.jpg';

const data = [
    {
        id: 1,
        exchangeStatus: "Успешный обмен",
        bookTitle: "1984",
        bookAuthor: "Джордж Оруэлл",
        bookCover: book1,
        giver: 'Алексей',
        receiver: 'Мария',
    },
    {
        id: 2,
        exchangeStatus: "Успешный обмен",
        bookTitle: "Евгений Онегин",
        bookAuthor: "Александр Пушкин",
        bookCover: book2,
        giver: 'Ирина',
        receiver: 'Дмитрий',
    },
    {
        id: 3,
        exchangeStatus: "Успешный обмен",
        bookTitle: "Преступление и наказание",
        bookAuthor: "Федор Достоевский",
        bookCover: book3,
        giver: 'Сергей',
        receiver: 'Ольга',
    },
    {
        id: 4,
        exchangeStatus: "Успешный обмен",
        bookTitle: "Маленький принц",
        bookAuthor: "Антуан де Сент-Экзюпери",
        bookCover: book4,
        giver: 'Анна',
        receiver: 'Павел',
    },

]

export const ExchangeExampleList = (props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.txt}>Примеры обменов</p>
            <div className={styles.exchangeList}>
                {data.map((exchange, index) => {
                    return (
                        <div key={exchange.id || index}>
                            <ExchangeExample {...exchange} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}