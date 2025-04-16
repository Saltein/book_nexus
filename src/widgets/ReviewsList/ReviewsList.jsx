import { useMemo, useState } from 'react';
import styles from './ReviewsList.module.css'
import userImage1 from './tempAssets/user1.jpg'
import userImage2 from './tempAssets/user2.jpg'
import userImage3 from './tempAssets/user3.jpg'
import { ReviewCard } from '../../entities/ui/ReviewCard/ReviewCard'
import { Pagination } from '../../shared';

const data = [
    {
        id: 1,
        name: 'Анна Петрова',
        rating: 4,
        date: '15 марта 2024',
        text: 'Отличный сервис! Быстро нашли нужную книгу, обмен прошел гладко. Рекомендую всем любителям чтения!',
        image: userImage1
    },
    {
        id: 1,
        name: 'Иван Сидоров',
        rating: 5,
        date: '10 марта 2024',
        text: 'Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен. Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен.',
        image: userImage2
    },
    {
        id: 1,
        name: 'Мария Иванова',
        rating: 4,
        date: '5 марта 2024',
        text: 'Обменяла 5 книг за месяц! Отличная возможность обновить свою библиотеку без затрат.',
        image: userImage3
    },
    {
        id: 1,
        name: 'Анна Петрова',
        rating: 4,
        date: '15 марта 2024',
        text: 'Отличный сервис! Быстро нашли нужную книгу, обмен прошел гладко. Рекомендую всем любителям чтения!',
        image: userImage1
    },
    {
        id: 1,
        name: 'Иван Сидоров',
        rating: 5,
        date: '10 марта 2024',
        text: 'Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен. Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен.',
        image: userImage2
    },
    {
        id: 1,
        name: 'Анна Петрова',
        rating: 4,
        date: '15 марта 2024',
        text: 'Отличный сервис! Быстро нашли нужную книгу, обмен прошел гладко. Рекомендую всем любителям чтения!',
        image: userImage1
    },
    {
        id: 1,
        name: 'Иван Сидоров',
        rating: 5,
        date: '10 марта 2024',
        text: 'Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен. Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен.',
        image: userImage2
    },
    {
        id: 1,
        name: 'Мария Иванова',
        rating: 4,
        date: '5 марта 2024',
        text: 'Обменяла 5 книг за месяц! Отличная возможность обновить свою библиотеку без затрат.',
        image: userImage3
    },
    {
        id: 1,
        name: 'Анна Петрова',
        rating: 4,
        date: '15 марта 2024',
        text: 'Отличный сервис! Быстро нашли нужную книгу, обмен прошел гладко. Рекомендую всем любителям чтения!',
        image: userImage1
    },
    {
        id: 1,
        name: 'Мария Иванова',
        rating: 4,
        date: '5 марта 2024',
        text: 'Обменяла 5 книг за месяц! Отличная возможность обновить свою библиотеку без затрат.',
        image: userImage3
    },
    {
        id: 1,
        name: 'Анна Петрова',
        rating: 4,
        date: '15 марта 2024',
        text: 'Отличный сервис! Быстро нашли нужную книгу, обмен прошел гладко. Рекомендую всем любителям чтения!',
        image: userImage1
    },
    {
        id: 1,
        name: 'Иван Сидоров',
        rating: 5,
        date: '10 марта 2024',
        text: 'Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен. Впервые воспользовался сервисом - остался доволен. Удобная система поиска и безопасный обмен.',
        image: userImage2
    },
    {
        id: 1,
        name: 'Мария Иванова',
        rating: 4,
        date: '5 марта 2024',
        text: 'Обменяла 5 книг за месяц! Отличная возможность обновить свою библиотеку без затрат.',
        image: userImage3
    },
]

export const ReviewsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Количество книг на странице

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return data.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {currentItems.map((review, index) => (
                    <div key={`${review.id}-${index}`}>
                        <ReviewCard {...review} />
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => { setCurrentPage(page) }}
            />
        </div>

    )
}