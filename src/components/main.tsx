////ts-nocheck

import styles from "./main.module.scss"
import { DropDownList, TabStrip, TabStripTab } from "@progress/kendo-react-all"
import { useEffect, useRef, useState } from "react"
import { AlignJustify, Building, LayoutGrid, Plus, X } from "lucide-react"
import { DocumentLayoutGrid } from "./data/DocumentLayoutGrid.tsx"
import { DialogDirectory } from "./ui/dialog/DialogDirectory/DialogDirectory.tsx"
import { DialogDownload } from "./ui/dialog/DialogDownload/DialogDownload.tsx"
import { Statistics } from "./statistics/statistics.tsx"
import { BlockViewDocument } from "./blockViewDocument/blockViewDocument.tsx"

export const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [optionLayout, setOptionLayout] = useState(true)
  const [isCreate, setIsCreate] = useState<boolean>(false)
  const [visibleDialogDownload, setVisibleDialogDownload] =
    useState<boolean>(false)
  const [visibleDialogDirectory, setVisibleDialogDirectory] =
    useState<boolean>(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleSelectTab = (id: number) => {
    setSelectedTab(id)
  }

  const handleSelectOption = (option: boolean) => {
    setOptionLayout(option)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)!
      ) {
        setIsCreate(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  const toggleDialogDirectory = () => {
    setVisibleDialogDirectory(!visibleDialogDirectory)
  }

  const toggleDialogDownload = () => {
    setVisibleDialogDownload(!visibleDialogDownload)
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
              onClick={() => setIsCreate(!isCreate)}
              className={
                styles.navigation__branch_and_create__btn_block__btn_create
              }
            >
              <Plus size={16} />
              <span>Создать</span>
              {isCreate && (
                <div
                  ref={dropdownRef}
                  className={
                    styles.navigation__branch_and_create__btn_block__btn_create__dropdown
                  }
                >
                  <p onClick={toggleDialogDownload}>Файл</p>
                  <p onClick={toggleDialogDirectory}>Новая папка</p>
                  <p>ZIP архив</p>
                  <p>Документ</p>
                </div>
              )}
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

      {visibleDialogDirectory && (
        <DialogDirectory onClose={toggleDialogDirectory} />
      )}

      {visibleDialogDownload && (
        <DialogDownload onClose={toggleDialogDownload} />
      )}

      <TabStrip style={{ width: "100%" }} selected={selectedTab}>
        <TabStripTab title="Мои файлы" contentClassName={styles.tabstrip}>
          <Statistics />

          <div className={styles.table_document}>
            {optionLayout ? <BlockViewDocument /> : <DocumentLayoutGrid />}
          </div>
        </TabStripTab>
        <TabStripTab title="Файлы клиента"></TabStripTab>
        <TabStripTab title="Корзина: -">
          <p>Корзина: -</p>
        </TabStripTab>
      </TabStrip>
    </div>
  )
}
