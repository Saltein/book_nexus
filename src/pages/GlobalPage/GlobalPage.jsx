import styles from './GlobalPage.module.css'
import { Footer, Header } from '../../widgets'
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage, ModeratorPage, ProfilePage } from '../../pages';
import { BookCatalogPage } from '../../pages';
import { BackToTopButton } from '../../shared';
import { ReviewsPage } from '../../pages';
import { ServiceRulesPage } from '../../pages';
import { AuthPage } from '../../pages';
import { ExchangeAndDeliveryPage } from '../../pages';
import { AuthProvider } from '../../app/context/AuthContext';
import { ProtectedRoute } from '../../app/hoc/ProtectedRoute';

export const GlobalPage = (props) => {

    const location = useLocation();

    const hideLayoutRoutes = ['/auth']
    const isSimpleLayout = hideLayoutRoutes.includes(location.pathname)

    return (
        <AuthProvider>
            <div className={styles.wrapper}>

                {!isSimpleLayout && <header><Header /></header>}

                {!isSimpleLayout && <div className={styles.margin} />}
                <Routes>
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/' element={<MainPage />} />

                    <Route path='/catalog' element={<BookCatalogPage />} />
                    <Route path='/exchange_delivery' element={<ExchangeAndDeliveryPage />} />
                    <Route path='/reviews' element={<ReviewsPage />} />
                    <Route path='/service_rules' element={<ServiceRulesPage />} />
                    <Route path='/auth' element={<AuthPage />} />

                    <Route path='/profile/*' element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path='/moderation/*' element={
                        <ProtectedRoute allowedRoles={['admin', 'moderator']}>
                            <ModeratorPage />
                        </ProtectedRoute>
                    } />
                </Routes>

                {!isSimpleLayout && <BackToTopButton />}
                {!isSimpleLayout && <Footer />}

            </div>
        </AuthProvider>
    )
}