import styles from './TransactionHistory.module.css'
import { useSelector } from 'react-redux'
import { getExamples } from '../ExchangeExampleList/model/examplesSlice'
import { MyExchange } from '../../shared'
import { useEffect } from 'react'

export const TransactionHistory = () => {
    const examplesData = useSelector(getExamples)

    useEffect(() => {
        console.log('examplesData', examplesData)
    }, [examplesData])

    return (
        <div className={styles.wrapper}>
            <div className={styles.exchangeList}>
                {examplesData.map((exchange, index) => {
                    return (
                        <MyExchange obj={exchange} key={exchange.id || index} />
                    )
                })}
            </div>
        </div>
    )
}