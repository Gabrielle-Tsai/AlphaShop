import styles from '../../style/Steps.module.css'
import grid from '../../style/Grid.module.css'

export default function ProgressControl() {
    return (
        <section className={`${styles.progressControlContainer} + "col col-lg-6 col-sm-12"`}>
            <section className={grid.col_12} data-phase="address">
                <button className={styles.next}>
                    下一步
                    <img src="/icons/right-arrow.svg" className="cursor-point">
                    </img>
                </button>
            </section>
            {/* <section className="button-group col col-12" data-phase="shipping">
                <button className="prev">
                    <img data="/icons/left-arrow.svg" className="cursor-point">
                    </img>
                    上一步
                </button>
                <button className={styles.next}>
                    下一步
                    <img data="/icons/right-arrow.svg" className="cursor-point">
                    </img>
                </button>
            </section>
            <section className="button-group col col-12" data-phase="credit-card">
                <button className="prev">
                    <img data="/icons/left-arrow.svg" className="cursor-point">
                    </img>
                    上一步
                </button>
                <button className={styles.next}>
                    確認下單
                </button>
            </section> */}
        </section>
    )
}