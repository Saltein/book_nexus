import { PreviewLabel } from '../../shared/ui/PreviewLabel/PreviewLabel'
import { ContentNav } from '../../widgets'
import { RuleBlock } from './ui/RuleBlock/RuleBlock'
import { DefaultDivider } from '../../shared'
import styles from './ServiceRulesPage.module.css'
import bookIcon from './assets/book.svg'
import copyrightIcon from './assets/copyright.svg'
import scalesIcon from './assets/scales.svg'
import shieldIcon from './assets/shield.svg'
import exchangeIcon from './assets/exchange.svg'


export const ServiceRulesPage = () => {

    const content = [
        <a href="#general">Общие положения</a>,
        <a href="#rights-and-responsibilities">Права и обязанности</a>,
        <a href="#exchange-rules">Правила обмена</a>,
        <a href="#safety">Безопасность</a>,
        <a href="#copyright">Контент и авторство</a>,
    ]

    const chapters = [
        {
            name: 'general',
            title: 'Общие положения',
            titleIcon: bookIcon,
            subtitles: [
                {
                    number: '1.1',
                    title: 'Принятие условий',
                    description: <p>Используя сервис, вы соглашаетесь с настоящими Правилами...</p>
                },
                {
                    number: '1.2',
                    title: 'Возрастные ограничения',
                    description: <p>Сервисом могут пользоваться лица старше 16 лет...</p>
                },
            ],
        },
        {
            name: 'rights-and-responsibilities',
            title: 'Права и обязанности',
            titleIcon: scalesIcon,
            subtitles: [
                {
                    number: '2.1',
                    title: 'Права пользователей',
                    description: <p>Свободный доступ к каталогу книг
                        Создание заявок на обмен
                        Использование системы рейтинга
                    </p>
                },
                {
                    number: '2.2',
                    title: 'Обязанности сторон',
                    description: <p>Пользователь обязуется предоставлять достоверную информацию...</p>
                },
            ],
        },
        {
            name: 'exchange-rules',
            title: 'Правила обмена',
            titleIcon: exchangeIcon,
            subtitles: [
                {
                    number: '3.1',
                    title: 'Условия обмена',
                    description: <p>Обмен считается состоявшимся после взаимного подтверждения...</p>
                },
                {
                    number: '3.2',
                    title: 'Отмена обмена',
                    description: <p>Возможность отмены заявки доступна за 24 часа до...</p>
                },
            ],
        },
        {
            name: 'safety',
            title: 'Безопасность',
            titleIcon: shieldIcon,
            subtitles: [
                {
                    number: '4.1',
                    title: 'Личные данные',
                    description: <p>Мы не передаем персональные данные третьим лицам...</p>
                },
                {
                    number: '4.2',
                    title: 'Ответственность',
                    description: <p>Платформа не несет ответственности за содержание книг...</p>
                },
            ],
        },
        {
            name: 'copyright',
            title: 'Контент и авторство',
            titleIcon: copyrightIcon,
            subtitles: [
                {
                    number: '5.1',
                    title: 'Авторские права',
                    description: <p>Все материалы платформы защищены законом об авторском праве...</p>
                },
            ],
        },
    ]

    return (
        <div className={styles.wrapper}>
            <PreviewLabel
                title={'Правила использования сервиса'}
                description={'Ознакомьтесь с условиями работы нашей платформы'}
            />

            <div className={styles.container}>
                <div className={styles.rulesBlock}>
                    <div className={styles.rulesNav}>
                        <ContentNav title={'Содержание'} content={content} />
                    </div>

                    <div className={styles.rules}>
                        {chapters.map((chapter, index) => {
                            const isLast = index === chapters.length - 1;
                            return (
                                <div key={index} >
                                    <RuleBlock {...chapter} />
                                    {!isLast && <DefaultDivider />}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}