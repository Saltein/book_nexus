import styles from './MyAnnouncements.module.css'
import { BookCard } from '../../entities'
import { ReactComponent as AddIcon } from './assets/add.svg'

const tempData = [
    {
        "id": 2,
        "name": "Фауст",
        "author": "Иоганн Вольфганг Гёте",
        "year": 1808,
        "img_url": "https://avatars.mds.yandex.net/get-mpic/6219218/img_id620146592925970781.jpeg/orig",
        "description": "Фауст в трагедии Иоганна Вольфганга Гёте «Фауст» — талантливый учёный, заключивший сделку с дьяволом. В стремлении получить безграничные знания и испытать яркие эмоции он соглашается обменять свою бессмертную душу.",
        "created_at": "2025-05-09T12:07:26.277Z",
        "updated_at": "2025-05-09T12:07:26.277Z",
        "genre_id": 4,
        "country_id": 4,
        "lang_id": 1,
        "Genre": {
            "id": 4,
            "name": "Трагедия"
        },
        "AuthorCountry": {
            "id": 4,
            "name": "Германия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
    {
        "id": 1,
        "name": "Мастер и Маргарита",
        "author": "Михаил Булгаков",
        "year": 1940,
        "img_url": "https://avatars.mds.yandex.net/i?id=ac38677b56438fc496a2b67d889fec8c_l-10767434-images-thumbs&n=13",
        "description": "«Мастер и Маргарита» — роман Михаила Булгакова, в котором переплетаются две сюжетные линии: действие происходит в современной автору Москве конца 1920-х — начала 1930-х годов и библейском Ершалаиме.",
        "created_at": "2025-05-09T10:34:26.229Z",
        "updated_at": "2025-05-09T12:06:20.599Z",
        "genre_id": 1,
        "country_id": 1,
        "lang_id": 1,
        "Genre": {
            "id": 1,
            "name": "Роман"
        },
        "AuthorCountry": {
            "id": 1,
            "name": "Россия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
    {
        "id": 2,
        "name": "Фауст",
        "author": "Иоганн Вольфганг Гёте",
        "year": 1808,
        "img_url": "https://avatars.mds.yandex.net/get-mpic/6219218/img_id620146592925970781.jpeg/orig",
        "description": "Фауст в трагедии Иоганна Вольфганга Гёте «Фауст» — талантливый учёный, заключивший сделку с дьяволом. В стремлении получить безграничные знания и испытать яркие эмоции он соглашается обменять свою бессмертную душу.",
        "created_at": "2025-05-09T12:07:26.277Z",
        "updated_at": "2025-05-09T12:07:26.277Z",
        "genre_id": 4,
        "country_id": 4,
        "lang_id": 1,
        "Genre": {
            "id": 4,
            "name": "Трагедия"
        },
        "AuthorCountry": {
            "id": 4,
            "name": "Германия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
    {
        "id": 1,
        "name": "Мастер и Маргарита",
        "author": "Михаил Булгаков",
        "year": 1940,
        "img_url": "https://avatars.mds.yandex.net/i?id=ac38677b56438fc496a2b67d889fec8c_l-10767434-images-thumbs&n=13",
        "description": "«Мастер и Маргарита» — роман Михаила Булгакова, в котором переплетаются две сюжетные линии: действие происходит в современной автору Москве конца 1920-х — начала 1930-х годов и библейском Ершалаиме.",
        "created_at": "2025-05-09T10:34:26.229Z",
        "updated_at": "2025-05-09T12:06:20.599Z",
        "genre_id": 1,
        "country_id": 1,
        "lang_id": 1,
        "Genre": {
            "id": 1,
            "name": "Роман"
        },
        "AuthorCountry": {
            "id": 1,
            "name": "Россия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
    {
        "id": 2,
        "name": "Фауст",
        "author": "Иоганн Вольфганг Гёте",
        "year": 1808,
        "img_url": "https://avatars.mds.yandex.net/get-mpic/6219218/img_id620146592925970781.jpeg/orig",
        "description": "Фауст в трагедии Иоганна Вольфганга Гёте «Фауст» — талантливый учёный, заключивший сделку с дьяволом. В стремлении получить безграничные знания и испытать яркие эмоции он соглашается обменять свою бессмертную душу.",
        "created_at": "2025-05-09T12:07:26.277Z",
        "updated_at": "2025-05-09T12:07:26.277Z",
        "genre_id": 4,
        "country_id": 4,
        "lang_id": 1,
        "Genre": {
            "id": 4,
            "name": "Трагедия"
        },
        "AuthorCountry": {
            "id": 4,
            "name": "Германия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
    {
        "id": 1,
        "name": "Мастер и Маргарита",
        "author": "Михаил Булгаков",
        "year": 1940,
        "img_url": "https://avatars.mds.yandex.net/i?id=ac38677b56438fc496a2b67d889fec8c_l-10767434-images-thumbs&n=13",
        "description": "«Мастер и Маргарита» — роман Михаила Булгакова, в котором переплетаются две сюжетные линии: действие происходит в современной автору Москве конца 1920-х — начала 1930-х годов и библейском Ершалаиме.",
        "created_at": "2025-05-09T10:34:26.229Z",
        "updated_at": "2025-05-09T12:06:20.599Z",
        "genre_id": 1,
        "country_id": 1,
        "lang_id": 1,
        "Genre": {
            "id": 1,
            "name": "Роман"
        },
        "AuthorCountry": {
            "id": 1,
            "name": "Россия"
        },
        "BookLanguage": {
            "id": 1,
            "name": "Русский"
        }
    },
]

export const MyAnnouncements = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.addBook}>
                <AddIcon className={styles.addIcon} />
            </div>
            {tempData.map((book, index) => (
                <div key={`${book.id}-${index}`}>
                    <BookCard
                        bookData={book}
                        isMyBook
                    />
                </div>
            ))}
        </div>
    )
}