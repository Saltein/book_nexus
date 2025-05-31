import { MyExchange } from '../../../entities/ui/MyExchange/MyExchange'
import { DefaultDivider } from '../Dividers/DefaultDivider/DefaultDivider'
import styles from './ExchangesListBox.module.css'

export const ExchangesListBox = ({ title, dataList, pending = false, accepted = false, update }) => {
    return (
        <div className={styles.wrapper}>
            {dataList.length > 0 &&
                <div className={styles.exchangeList}>
                    <div className={styles.labelDiv}>
                        <DefaultDivider />
                        <span className={styles.label}>{title}</span>
                        <DefaultDivider />
                    </div>
                    {dataList.slice().reverse().map((exchange, index) => {
                        return (
                            <MyExchange obj={exchange} key={exchange.id || index} pending={pending} accepted={accepted} update={update} />
                        )
                    })}
                </div>
            }
        </div>
    )
}