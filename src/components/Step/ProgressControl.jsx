import styles from '../../style/Steps.module.css'
import grid from '../../style/Grid.module.css'

export default function ProgressControl({ onPrev, onNext, step}) {

    if (step === 1) {
        return(
            <section className={`${styles.progressControlContainer} + "col col-lg-6 col-sm-12"`}>
                <section className={grid.col_12} data-phase="address">
                    <button className={styles.next} onClick={onNext}>
                        下一步
                        <img src="/icons/right-arrow.svg" className="cursor-point">
                        </img>
                    </button>
                </section>
            </section>
        )
    } else if (step === 2) {
        return (
            <section className={`${styles.progressControlContainer} + "col col-lg-6 col-sm-12"`}>
                <section className={styles.buttonGroup} data-phase="shipping">
                    <button className={styles.prev} onClick={onPrev}>
                        <img src="/icons/left-arrow.svg" className="cursor-point">
                        </img>
                        上一步
                    </button>
                    <button className={styles.next} onClick={onNext}>
                        下一步
                        <img src="/icons/right-arrow.svg" className="cursor-point">
                        </img>
                    </button>
                </section>
            </section>
        )
    }
    return (
        <section className={`${styles.progressControlContainer} + "col col-lg-6 col-sm-12"`}>
            <section className={styles.buttonGroup} data-phase="credit-card">
                <button className={styles.prev} onClick={onPrev}>
                    <img src="/icons/left-arrow.svg" className="cursor-point">
                    </img>
                    上一步
                </button>
                <button className={styles.next}>
                    確認下單
                </button>
            </section>
        </section>
    )
}