import styles from './DefaultDivider.module.css'

export const DefaultDivider = ({margin}) => {
    return (
        <div className={styles.divider} style={{marginLeft: margin, marginRight: margin}}/>
    )
}