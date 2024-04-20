import styles from '../../style/Steps.module.css'

export default function StepProgress() {
    return (
        <section className={styles.progressContainer}>
            <span className={styles.progressGroup} data-phase="address">
                <span className={styles.progressIcon + " " + styles.active}>
                    <span className="text">1</span>
                </span>
                <span className={styles.progressLabelDone}>寄送地址</span>
            </span>
            <span className={styles.progressBarDone} data-order="1"></span>
            <span className={styles.progressGroup} data-phase="shipping">
                <span className={styles.progressIcon}>
                    <span className="text">2</span>
                </span>
                <span className={styles.progressLabel}>運送方式</span>
            </span>
            <span className={styles.progressBar} data-order="2"></span>
            <span className={styles.progressGroup} data-phase="credit-card">
                <span className={styles.progressIcon}>
                    <span className="text">3</span>
                </span>
                <span className={styles.progressLabel}>付款資訊</span>
            </span>
        </section>
    )
}