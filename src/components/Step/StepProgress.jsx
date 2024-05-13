import styles from '../../style/Steps.module.css'

export default function StepProgress({ step }) {
    let step1 = `${styles.progressIcon}`
    let step2 = `${styles.progressIcon}`
    let step3 = `${styles.progressIcon}`
    if (step === 1) {
        step1 += ` ${styles.active}`
    } else if (step === 2) {
        step1 += ` ${styles.finished}`
        step2 += ` ${styles.active}`
    } else if (step === 3) {
        step1 += ` ${styles.finished}`
        step2 += ` ${styles.finished}`
        step3 += ` ${styles.active}`
    }
    return (
        <section className={styles.progressContainer}>
            <span className={styles.progressGroup} data-phase="address">
                <span className={step1}>
                    <span className="text">1</span>
                </span>
                <span className={styles.progressLabel}>寄送地址</span>
            </span>
            <span className={styles.progressBarDone} data-order="1"></span>
            <span className={styles.progressGroup} data-phase="shipping">
                <span className={step2}>
                    <span className="text">2</span>
                </span>
                <span className={styles.progressLabel}>運送方式</span>
            </span>
            <span className={styles.progressBar} data-order="2"></span>
            <span className={styles.progressGroup} data-phase="credit-card">
                <span className={step3}>
                    <span className="text">3</span>
                </span>
                <span className={styles.progressLabel}>付款資訊</span>
            </span>
        </section>
    )
}