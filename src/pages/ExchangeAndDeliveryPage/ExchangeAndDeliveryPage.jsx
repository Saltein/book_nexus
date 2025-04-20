import { DefaultDivider } from '../../shared'
import { PreviewLabel } from '../../shared/ui/PreviewLabel/PreviewLabel'
import styles from './ExchangeAndDeliveryPage.module.css'
import forbidIcon from './assets/forbid.svg'
import handshakeIcon from './assets/handshake.svg'
import shieldIcon from './assets/shield.svg'
import { RuleList } from './ui/RuleList/RuleList'

const rules = [
    {
        image: handshakeIcon,
        title: 'Основные правила',
        rules: [
            {
                allowed: true,
                text: 'Обмен равноценными книгами',
            },
            {
                allowed: true,
                text: 'Соответствие описанию',
            },
            {
                allowed: true,
                text: 'Своевременное подтверждение',
            },
        ],
    },
    {
        image: shieldIcon,
        title: 'Безопасность',
        rules: [
            {
                allowed: true,
                text: 'Личная встреча в людном месте',
            },
            {
                allowed: true,
                text: 'Проверка состояния книги',
            },
            {
                allowed: true,
                text: 'Использование голосовой поддержки',
            },
        ],
    },
    {
        image: forbidIcon,
        title: 'Запрещено',
        rules: [
            {
                allowed: false,
                text: 'Обмен поврежденными книгами',
            },
            {
                allowed: false,
                text: 'Требование предоплаты',
            },
            {
                allowed: false,
                text: 'Обмен вне платформы',
            },
        ],
    },
]

const tutorials = [
    {
        title: 'Выбор книги',
        description: 'Найдите интересующую книгу в каталоге и отправьте запрос на обмен',
    },
    {
        title: 'Подтверждение обмена',
        description: 'Обсудите детали в нашем защищенном чате и согласуйте место встречи',
    },
    {
        title: 'Личная встреча',
        description: 'Встретьтесь в согласованном людном месте для обмена книгами',
    },
    {
        title: 'Подтверждение сделки',
        description: 'После обмена подтвердите успешное завершение сделки в приложении',
    },
]

export const ExchangeAndDeliveryPage = () => {
    return (
        <div className={styles.wrapper}>
            <PreviewLabel
                title={'Безопасный обмен книгами'}
                description={'Соблюдайте простые правила для приятного и безопасного обмена'}
            />

            <div className={styles.rules}>
                <RuleList ruleList={rules} />
            </div>

            <DefaultDivider />

            <div className={styles.tutors}>
                <h2 className={styles.globalTitle}>Как проходит безопасная сделка?</h2>
                <div className={styles.tutorList}>
                    {tutorials.map((tutor, index) => {
                        return (
                            <div className={styles.tutor} key={index}>
                                <h4 className={styles.title}>{tutor.title}</h4>
                                <p className={styles.description}>{tutor.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <DefaultDivider />
        </div>
    )
}