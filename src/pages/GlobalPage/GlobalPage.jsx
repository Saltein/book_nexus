import styles from './GlobalPage.module.css'
import { Footer, Header } from '../../widgets'
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { BookCatalogPage } from '../BookCatalogPage/BookCatalogPage';
import { BackToTopButton } from '../../shared';
import { ReviewsPage } from '../ReviewsPage/ReviewsPage';
import { ServiceRulesPage } from '../ServiceRulesPage/ServiceRulesPage';
import { AuthPage } from '../AuthPage/AuthPage';

export const GlobalPage = (props) => {

    const location = useLocation();

    const hideLayoutRoutes = ['/auth']
    const isSimpleLayout = hideLayoutRoutes.includes(location.pathname)

    return (
        <div className={styles.wrapper}>

            {!isSimpleLayout && <header><Header /></header>}

            {!isSimpleLayout && <div className={styles.margin} />}
            <Routes>
                <Route path='/main' element={<MainPage />} />
                <Route path='/' element={<MainPage />} />

                <Route path='/catalog' element={<BookCatalogPage />} />

                <Route path='/reviews' element={<ReviewsPage />} />
                <Route path='/service_rules' element={<ServiceRulesPage />} />
                <Route path='/auth' element={<AuthPage />} />
            </Routes>

            {!isSimpleLayout && <BackToTopButton />}
            {!isSimpleLayout && <Footer />}

        </div>
    )
}