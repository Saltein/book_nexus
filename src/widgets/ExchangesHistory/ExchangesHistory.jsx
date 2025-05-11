import styles from './ExchangesHistory.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { DefaultDivider, ExchangesListBox, MyExchange } from '../../shared'
import { useEffect } from 'react'
import { exchangesApi } from '../../shared/api/exchangesApi'
import {
    getExchangesArchive,
    setExchangesArchive,
    setExchangesPending,
    setExchangesAccepted,
    getExchangesPending,
    getExchangesAccepted,
} from './model/exchangesSlice'
import { getId } from '../../entities/user/model/userSlice'

export const ExchangesHistory = () => {
    const dispatch = useDispatch()
    const archiveExchangesData = useSelector(getExchangesArchive)
    const pendingExchangesData = useSelector(getExchangesPending)
    const acceptedExchangesData = useSelector(getExchangesAccepted)
    const userId = useSelector(getId)

    const getExchangesFunc = async () => {
        try {
            const [completed, rejected, accepted, pending] = await Promise.all([
                exchangesApi.getExchangesByStatus(userId, 'completed'),
                exchangesApi.getExchangesByStatus(userId, 'rejected'),
                exchangesApi.getExchangesByStatus(userId, 'accepted'),
                exchangesApi.getExchangesByStatus(userId, 'pending'),
            ])
            console.log("Данные completed:", completed)
            console.log("Данные rejected :", rejected)
            console.log("Данные accepted :", accepted)
            console.log("Данные pending  :", pending)

            dispatch(setExchangesArchive([...completed, ...rejected]))
            dispatch(setExchangesAccepted(accepted))
            dispatch(setExchangesPending(pending))
        } catch (error) {
            console.error("Ошибка получения обменов", error)
        }
    }

    useEffect(() => {
        getExchangesFunc()
    }, [])

    return (
        <div className={styles.wrapper}>
            <ExchangesListBox title={'Принятые'} dataList={acceptedExchangesData}/>
            <ExchangesListBox title={'На рассмотрении'} dataList={pendingExchangesData}/>
            <ExchangesListBox title={'Архив'} dataList={archiveExchangesData}/>

            {archiveExchangesData.length === 0 && <span className={styles.message}>Вы еще не совершали обменов</span>}
        </div >
    )
}