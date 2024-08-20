import styles from "./main.module.scss"
import {
  CircularGauge,
  DropDownList,
  TabStrip,
  TabStripTab,
} from "@progress/kendo-react-all"
import { useState } from "react"
import { AlignJustify, Building, LayoutGrid, Plus, X } from "lucide-react"

export const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [optionLayout, setOptionLayout] = useState(true)
  const handleSelectTab = (id: number) => {
    setSelectedTab(id)
  }

  const handleSelectOption = (option: boolean) => {
    setOptionLayout(option)
  }

  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <div className={styles.navigation__tabstrip}>
          <p
            className={
              selectedTab === 0
                ? styles.active
                : styles.navigation__tabstrip_text
            }
            onClick={() => handleSelectTab(0)}
          >
            Мои файлы
          </p>
          <p
            className={
              selectedTab === 1
                ? styles.active
                : styles.navigation__tabstrip_text
            }
            onClick={() => handleSelectTab(1)}
          >
            Файлы клиента
          </p>
          <p
            className={
              selectedTab === 2
                ? styles.active
                : styles.navigation__tabstrip_text
            }
            onClick={() => handleSelectTab(2)}
          >
            Корзина: -
          </p>
        </div>

        <div className={styles.navigation__branch_and_create}>
          <div className={styles.navigation__branch_and_create__filters}>
            <Building
              color={"#949494"}
              size={22}
              style={{ marginRight: "10px" }}
            />

            <div
              className={styles.navigation__branch_and_create__filters__branch}
            >
              <p
                className={
                  styles.navigation__branch_and_create__filters__branch__text
                }
              >
                Филиал
              </p>
              <DropDownList
                className={
                  styles.navigation__branch_and_create__filters__branch__dropdown
                }
                data={["001", "002"]}
                defaultValue={"001"}
              />
            </div>
            <div
              className={styles.navigation__branch_and_create__filters__office}
            >
              <p
                className={
                  styles.navigation__branch_and_create__filters__office__text
                }
              >
                Офис
              </p>
              <DropDownList
                className={
                  styles.navigation__branch_and_create__filters__office__dropdown
                }
                data={["001.0   Таджикистан | Душанбе", "002.0   Худжанд"]}
                defaultValue={"001.0   Таджикистан | Душанбе"}
              />
            </div>
            <div
              className={styles.navigation__branch_and_create__filters__type}
            >
              <p
                className={
                  styles.navigation__branch_and_create__filters__type__text
                }
              >
                Тип
              </p>
              <DropDownList
                className={
                  styles.navigation__branch_and_create__filters__type__dropdown
                }
                data={["Все", "Все1"]}
                defaultValue={"Все"}
              />
            </div>

            <X
              className={styles.navigation__branch_and_create__filters__reset}
              size={20}
              color={"#656565"}
            />
          </div>
          <div className={styles.navigation__branch_and_create__btn_block}>
            <button
              className={
                styles.navigation__branch_and_create__btn_block__btn_create
              }
            >
              <Plus size={16} />
              <span>Создать</span>
            </button>
            <div
              className={
                styles.navigation__branch_and_create__btn_block__switch
              }
            >
              <AlignJustify
                onClick={() => handleSelectOption(false)}
                className={
                  !optionLayout
                    ? styles.navigation__branch_and_create__btn_block__switch__active
                    : styles.navigation__branch_and_create__btn_block__switch__block
                }
                size={40}
              />
              <LayoutGrid
                className={
                  optionLayout
                    ? styles.navigation__branch_and_create__btn_block__switch__active
                    : styles.navigation__branch_and_create__btn_block__switch__layout_grid
                }
                onClick={() => handleSelectOption(true)}
                size={40}
              />
            </div>
          </div>
        </div>
      </div>

      <TabStrip style={{ width: "100%" }} selected={selectedTab}>
        <TabStripTab title="Мои файлы" contentClassName={styles.tabstrip}>
          <div className={styles.statistics}>
            <div>
              <h2>68 файлов</h2>
              <p>Всего занято</p>
              <p>10 / 80 гб</p>
            </div>
            <div className={styles.statistics__static_circle}>
              <CircularGauge
                scale={{ rangeSize: 5 }}
                value={20}
                color={"blue"}
                style={{ width: "60px", height: "60px" }}
              />
              <div className={styles.statistics__static_circle__value}>
                <div>10 из 68</div>
                <div>
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
                <div>20 из 68</div>
                <div>
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
                <div>10 из 68</div>
                <div>
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
                <div>10 из 68</div>
                <div>
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
                <div>10 из 68</div>
                <p>Другие файлы</p>
              </div>
            </div>
          </div>
        </TabStripTab>
        <TabStripTab title="Файлы клиента">
          <p>Tab 2 Content</p>
        </TabStripTab>
        <TabStripTab title="Корзина: -">
          <p>Корзина: -</p>
        </TabStripTab>
      </TabStrip>
    </div>
  )
}
