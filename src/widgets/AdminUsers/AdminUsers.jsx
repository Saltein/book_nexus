import { useMemo, useState } from 'react';
import { UserRow } from '../../entities/user/ui/UserRow/UserRow'
import { Pagination, SearchBar } from '../../shared'
import styles from './AdminUsers.module.css'

const usersData = [
    { id: '001', name: 'Иван Иванов', email: 'ivanov@gmail.com', phone: '89012345678', city: 'Москва', birthday: '12.03.1990', role: 'user' },
    { id: '002', name: 'Анна Смирнова', email: 'anna.smirnova@mail.ru', phone: '89112223344', city: 'Санкт-Петербург', birthday: '25.11.1993', role: 'admin' },
    { id: '003', name: 'Петр Кузнецов', email: 'petr.kuz@gmail.com', phone: '89223334455', city: 'Казань', birthday: '01.07.1987', role: 'user' },
    { id: '004', name: 'Елена Морозова', email: 'morozova.lena@yandex.ru', phone: '89556677889', city: 'Новосибирск', birthday: '17.09.1995', role: 'user' },
    { id: '005', name: 'Дмитрий Соколов', email: 'dima.sok@inbox.ru', phone: '89667778899', city: 'Екатеринбург', birthday: '30.04.1989', role: 'moderator' },
    { id: '006', name: 'Мария Лебедева', email: 'm.lebed@gmail.com', phone: '89889990001', city: 'Самара', birthday: '10.12.1992', role: 'user' },
    { id: '007', name: 'Алексей Новиков', email: 'aleksey.nov@ya.ru', phone: '89334445566', city: 'Омск', birthday: '08.08.1985', role: 'user' },
    { id: '008', name: 'Ольга Федорова', email: 'fedolga@mail.ru', phone: '89007778899', city: 'Челябинск', birthday: '14.02.1990', role: 'admin' },
    { id: '009', name: 'Сергей Волков', email: 'sergey.volk@gmail.com', phone: '89115556677', city: 'Пермь', birthday: '20.05.1984', role: 'user' },
    { id: '010', name: 'Наталья Алексеева', email: 'n.alekseeva@mail.ru', phone: '89887776655', city: 'Уфа', birthday: '03.10.1991', role: 'moderator' },
    { id: '011', name: 'Андрей Михайлов', email: 'a.mih@inbox.ru', phone: '89224443322', city: 'Красноярск', birthday: '27.07.1988', role: 'user' },
    { id: '012', name: 'Виктория Никитина', email: 'v.nikitina@gmail.com', phone: '89653332211', city: 'Воронеж', birthday: '16.06.1994', role: 'user' },
    { id: '013', name: 'Максим Захаров', email: 'max.zakharov@yandex.ru', phone: '89112224455', city: 'Волгоград', birthday: '06.01.1990', role: 'user' },
    { id: '014', name: 'Алина Васильева', email: 'vasilina@mail.ru', phone: '89774445566', city: 'Краснодар', birthday: '11.04.1993', role: 'admin' },
    { id: '015', name: 'Тимур Павлов', email: 'timur.pavlov@gmail.com', phone: '89332221100', city: 'Тюмень', birthday: '28.02.1986', role: 'user' },
    { id: '016', name: 'Дарья Голубева', email: 'golubeva.daria@mail.ru', phone: '89009998877', city: 'Иркутск', birthday: '05.09.1992', role: 'user' },
    { id: '017', name: 'Роман Комаров', email: 'r.komarov@ya.ru', phone: '89117778899', city: 'Барнаул', birthday: '13.12.1987', role: 'user' },
    { id: '018', name: 'Екатерина Орлова', email: 'orlova.k@gmail.com', phone: '89220001122', city: 'Ульяновск', birthday: '09.11.1995', role: 'moderator' },
    { id: '019', name: 'Никита Беляев', email: 'belyaev.nikita@inbox.ru', phone: '89336667788', city: 'Томск', birthday: '19.03.1991', role: 'user' },
    { id: '020', name: 'Светлана Тарасова', email: 's.tar@mail.ru', phone: '89445556677', city: 'Курск', birthday: '07.07.1990', role: 'admin' },
    { id: '021', name: 'Илья Громов', email: 'gromov.ilya@yandex.ru', phone: '89881112233', city: 'Саратов', birthday: '26.08.1989', role: 'user' },
    { id: '022', name: 'Полина Егорова', email: 'polina.e@mail.ru', phone: '89993334455', city: 'Тула', birthday: '21.05.1993', role: 'user' },
    { id: '023', name: 'Владислав Соловьёв', email: 'v.solovyev@gmail.com', phone: '89100001111', city: 'Киров', birthday: '15.01.1988', role: 'user' },
    { id: '024', name: 'Анастасия Зайцева', email: 'zaitseva.nastia@ya.ru', phone: '89557778899', city: 'Чебоксары', birthday: '02.06.1992', role: 'moderator' },
    { id: '025', name: 'Константин Егоров', email: 'egorov.konst@inbox.ru', phone: '89008887766', city: 'Якутск', birthday: '24.04.1985', role: 'user' },
    { id: '026', name: 'Юлия Романова', email: 'romanova.yul@gmail.com', phone: '89225556600', city: 'Сочи', birthday: '29.10.1990', role: 'user' },
    { id: '027', name: 'Артур Белов', email: 'artur.belov@mail.ru', phone: '89337778888', city: 'Махачкала', birthday: '04.03.1986', role: 'admin' },
    { id: '028', name: 'Вера Савельева', email: 'savelieva.vera@ya.ru', phone: '89441112233', city: 'Ижевск', birthday: '22.08.1994', role: 'user' },
    { id: '029', name: 'Артем Шестаков', email: 'shestakov.art@gmail.com', phone: '89118887799', city: 'Брянск', birthday: '18.02.1987', role: 'user' },
    { id: '030', name: 'Людмила Крылова', email: 'krylova.luda@yandex.ru', phone: '89667775544', city: 'Рязань', birthday: '31.12.1991', role: 'moderator' },
]

const USERS_PER_PAGE = 10;

export const AdminUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(usersData.length / USERS_PER_PAGE);

    const paginatedUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * USERS_PER_PAGE;
        const endIndex = startIndex + USERS_PER_PAGE;
        return usersData.slice(startIndex, endIndex);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.wrapper}>
            <SearchBar />
            <div className={styles.users}>
                {paginatedUsers.map((user, index) => (
                    <UserRow key={`${index}-${user.id}`} userData={user} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                maxPageButtons={5}
            />
        </div>
    );
};