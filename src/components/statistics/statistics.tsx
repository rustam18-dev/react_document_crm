import styles from "./statistics.module.scss"
import { CircularGauge } from "@progress/kendo-react-all"

export const Statistics = () => {
  return (
    <>
      <div className={styles.statistics}>
        <div className={styles.statistics__total}>
          <p className={styles.statistics__total__count}>
            68 <span>файлов</span>
          </p>
          <div className={styles.statistics__total__memory}>
            <p>Всего занято</p>
            <p>10 / 80 гб</p>
          </div>
        </div>
        <div className={styles.statistics__static_circle}>
          <CircularGauge
            scale={{ rangeSize: 5 }}
            value={20}
            color={"blue"}
            style={{ width: "60px", height: "60px" }}
          />
          <div className={styles.statistics__static_circle__value}>
            <div className={styles.statistics__static_circle__value__count}>
              <span>10 </span>
              <span> из 68</span>
            </div>
            <div className={styles.statistics__static_circle__value__lists}>
              <p>Тестовые документы</p>
              <p>*.doc, .docx, .odt, .txt, .rtf</p>
            </div>
          </div>
        </div>
        <div className={styles.statistics__static_circle}>
          <CircularGauge
            scale={{ rangeSize: 5 }}
            value={20}
            color={"green"}
            style={{ width: "60px", height: "60px" }}
          />
          <div className={styles.statistics__static_circle__value}>
            <div className={styles.statistics__static_circle__value__count}>
              <span>20 </span>
              <span> из 68</span>
            </div>
            <div className={styles.statistics__static_circle__value__lists}>
              <p>Электронная таблица</p>
              <p>*.doc, .docx, .odt, .txt, .rtf</p>
            </div>
          </div>
        </div>
        <div className={styles.statistics__static_circle}>
          <CircularGauge
            scale={{ rangeSize: 5 }}
            value={20}
            color={"orange"}
            style={{ width: "60px", height: "60px" }}
          />
          <div className={styles.statistics__static_circle__value}>
            <div className={styles.statistics__static_circle__value__count}>
              <span>10 </span>
              <span> из 68</span>
            </div>
            <div className={styles.statistics__static_circle__value__lists}>
              <p>Презентации</p>
              <p>*.doc, .docx, .odt, .txt, .rtf</p>
            </div>
          </div>
        </div>
        <div className={styles.statistics__static_circle}>
          <CircularGauge
            scale={{ rangeSize: 5 }}
            value={20}
            color={"red"}
            style={{ width: "60px", height: "60px" }}
          />
          <div className={styles.statistics__static_circle__value}>
            <div className={styles.statistics__static_circle__value__count}>
              <span>10 </span>
              <span> из 68</span>
            </div>
            <div className={styles.statistics__static_circle__value__lists}>
              <p>Документы</p>
              <p>*.doc, .docx, .odt, .txt, .rtf</p>
            </div>
          </div>
        </div>
        <div className={styles.statistics__static_circle}>
          <CircularGauge
            scale={{ rangeSize: 5 }}
            value={20}
            color={"grey"}
            style={{ width: "60px", height: "60px" }}
          />
          <div className={styles.statistics__static_circle__value}>
            <div className={styles.statistics__static_circle__value__count}>
              <span>10 </span>
              <span> из 68</span>
            </div>
            <div className={styles.statistics__static_circle__value__lists}>
              <p>Другие файлы</p>
              <p style={{ visibility: "hidden" }}>
                *.doc, .docx, .odt, .txt, .rtf
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
