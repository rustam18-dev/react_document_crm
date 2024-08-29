import styles from "./navigation.module.scss"
import {
  AlignJustify,
  Building,
  HardDriveDownload,
  LayoutGrid,
  Plus,
  X,
} from "lucide-react"
import { DropDownList } from "@progress/kendo-react-all"
import { isExistCheckedDocumentUtils } from "../../utils/isExistCheckedDocument.utils.ts"
import { counterOfCheckedDocumentUtils } from "../../utils/counterOfCheckedDocument.utils.ts"
import { useAppSelector } from "../../hooks/redux.ts"
import { useActions } from "../../hooks/actions.ts"
import { useEffect, useRef, useState } from "react"
import { ThinArrow } from "../../assets/svg/ThinArrow.tsx"

type Props = {
  setOptionLayout: (option: boolean) => void
  setSelectedTab: (id: number) => void
  optionLayout: boolean
  selectedTab: number
}

const dropdownData = [
  {
    id: 1,
    title: "Cнять выбор",
  },
  {
    id: 2,
    title: "Загрузить как ZIP",
  },
  {
    id: 3,
    title: "Удалить выбранные",
  },
  {
    id: 4,
    title: "Переместить в папку ...",
  },
]

export const Navigation = ({
  setOptionLayout,
  setSelectedTab,
  optionLayout,
  selectedTab,
}: Props) => {
  const { documents } = useAppSelector((state) => state.document)
  const { toggleDialogDownload, toggleDialogDirectory } = useActions()

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [isCreate, setIsCreate] = useState<boolean>(false)
  const [isCheckedDropdown, setIsCheckedDropdown] = useState<boolean>(false)
  const [selectedCheck, setSelectedCheck] = useState<string>("Снять выбор")

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
        setIsCheckedDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])
  return (
    <>
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
            {!isExistCheckedDocumentUtils(documents) && (
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
            )}

            <X
              className={styles.navigation__branch_and_create__filters__reset}
              size={20}
              color={"#656565"}
            />
          </div>
          <div className={styles.navigation__branch_and_create__btn_block}>
            {!isExistCheckedDocumentUtils(documents) ? (
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
                    <p onClick={() => toggleDialogDownload()}>Файл</p>
                    <p onClick={() => toggleDialogDirectory()}>Новая папка</p>
                    <p>ZIP архив</p>
                    <p>Документ</p>
                  </div>
                )}
              </button>
            ) : (
              <>
                <div
                  ref={dropdownRef}
                  className={
                    isCheckedDropdown
                      ? styles.navigation__branch_and_create__btn_block__dropdown +
                        " " +
                        styles.borderB
                      : styles.navigation__branch_and_create__btn_block__dropdown
                  }
                  onMouseLeave={() => {
                    setIsCheckedDropdown(false)
                  }}
                >
                  <div
                    className={
                      styles.navigation__branch_and_create__btn_block__dropdown__values
                    }
                  >
                    <span>{selectedCheck}</span>
                    <div
                      className={isCheckedDropdown ? styles.flex : styles.dNone}
                    >
                      {dropdownData.map((item) => (
                        <span
                          key={item.id}
                          onClick={() => {
                            setSelectedCheck(item.title)
                            setIsCheckedDropdown(false)
                          }}
                          className={
                            selectedCheck === item.title
                              ? styles.active_dropdown
                              : ""
                          }
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={
                      styles.navigation__branch_and_create__btn_block__dropdown__arrow
                    }
                    onMouseEnter={() => {
                      setIsCheckedDropdown(true)
                    }}
                  >
                    <div
                      className={
                        !isCheckedDropdown ? styles.rotate180 : styles.rotate0
                      }
                    >
                      <ThinArrow />
                    </div>
                  </div>
                </div>
                <button
                  className={
                    styles.navigation__branch_and_create__btn_block__btn_create
                  }
                >
                  <HardDriveDownload size={15} />
                  Скачать: {counterOfCheckedDocumentUtils(documents)}
                </button>
              </>
            )}

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
    </>
  )
}
