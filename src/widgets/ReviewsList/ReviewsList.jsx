import { useEffect, useMemo, useState } from 'react';
import styles from './ReviewsList.module.css'
import { ReviewCard } from '../../entities/ui/ReviewCard/ReviewCard'
import { Pagination } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, setReviews } from '../../features/review/model/reviewsSlice';
import { reviewsApi } from '../../shared/api/reviewsApi';

export const ReviewsList = () => {
    const dispatch = useDispatch()

    const reviewsData = useSelector(getReviews).slice().reverse()

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Количество книг на странице

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return reviewsData.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

    const getReviewsFunc = async () => {
        try {
            const response = await reviewsApi.getReviews()
            if (response) {
                console.log("Данные получены", response)
                dispatch(setReviews(response))
            } else {
                console.log("Неизвестная ошибка получения примеров")
            }
        } catch (error) {
            console.log("Ошибка получения примеров", error)
        }
    }

    useEffect(() => {
        getReviewsFunc()
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {currentItems.map((review, index) => (
                    <div key={`${review.id}-${index}`}>
                        <ReviewCard
                            UserAccount={review.UserAccount}
                            rating={review.rating}
                            created_at={review.created_at}
                            comment={review.comment}
                        />
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