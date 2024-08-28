import styles from "./blockViewDocument.module.scss"
import { Checkbox } from "@progress/kendo-react-all"
import { WordIcon } from "../../assets/svg/WordIcon.tsx"
import avatar from "../../assets/image/avatar.png"
import { useState } from "react"
import { useAppSelector } from "../../hooks/redux.ts"
import { Badge } from "../data/badge.tsx"
import { PDFIcon } from "../../assets/svg/PDFIcon.tsx"
import { ExcelIcon } from "../../assets/svg/ExcelIcon.tsx"
import { useActions } from "../../hooks/actions.ts"

export const BlockViewDocument = () => {
  const [isRotatedRecent, setIsRotatedRecent] = useState(true)
  const [isRotatedAll, setIsRotatedAll] = useState(true)
  const { checkRecentFiles } = useActions()
  const { documents } = useAppSelector((state) => state.document)

  const handleDropdownClick = (isRecent: boolean) => {
    if (isRecent) {
      setIsRotatedRecent(!isRotatedRecent)
    } else {
      setIsRotatedAll(!isRotatedAll)
    }
  }

  return (
    <>
      <div className={styles.dropdown_recent_block}>
        <div
          className={styles.dropdown_recent_text}
          onClick={() => handleDropdownClick(true)}
        >
          <svg
            tabIndex={0}
            xmlns="http://www.w3.org/2000/svg"
            width="16.5"
            height="8"
            viewBox="0 0 16.5 8"
            className={isRotatedRecent ? styles.rotate180 : ""}
          >
            <path
              id="Контур_6814"
              data-name="Контур 6814"
              d="M-22864,9161l8.521,8.521,8.521-8.521"
              transform="translate(-22846.604 9170.229) rotate(180)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <p>Недавние файлы:</p>
        </div>
        <div
          className={styles.block_view}
          style={isRotatedRecent ? { display: "grid" } : { display: "none" }}
        >
          {documents.map((_item, index) => {
            return (
              <div
                key={index}
                className={
                  _item.selected
                    ? styles.block_view__item + " " + styles.active
                    : styles.block_view__item
                }
              >
                <div className={styles.block_view__item_parameters}>
                  <Checkbox
                    size={"large"}
                    onClick={() => checkRecentFiles(_item)}
                  />
                  <p>
                    <svg
                      id="File_Options"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.002"
                      height="6"
                      viewBox="0 0 26.002 6"
                    >
                      <path
                        id="Объединение_593"
                        data-name="Объединение 593"
                        d="M17956.5-6558a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17956.5-6558Zm-10,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17946.5-6558Zm-10,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17936.5-6558Z"
                        transform="translate(-17936.5 6560.999)"
                        fill="#717171"
                      />
                    </svg>
                  </p>
                </div>
                <div className={styles.block_view__item_type}>
                  {_item.status && <span>{_item.status}</span>}
                  {_item.type_document === ".docx" ? (
                    <WordIcon />
                  ) : _item.type_document === ".pdf" ? (
                    <PDFIcon />
                  ) : _item.type_document === ".xlsx" ? (
                    <ExcelIcon />
                  ) : null}
                </div>
                <div className={styles.block_view__item_information}>
                  <img
                    src={avatar}
                    alt="avatar"
                    width={30}
                    style={{ borderRadius: "30px" }}
                  />
                  <span className={styles.block_view__item_information__name}>
                    {_item.who_changed_upload}
                  </span>
                  <Badge type_download={_item.type_document} />
                </div>
                <p className={styles.block_view__item_filename}>
                  {_item.filename}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.dropdown_all_block}>
        <div
          className={styles.dropdown_recent_text}
          onClick={() => handleDropdownClick(false)}
        >
          <svg
            tabIndex={0}
            xmlns="http://www.w3.org/2000/svg"
            width="16.5"
            height="8"
            viewBox="0 0 16.5 8"
            className={isRotatedAll ? styles.rotate180 : ""}
          >
            <path
              id="Контур_6814"
              data-name="Контур 6814"
              d="M-22864,9161l8.521,8.521,8.521-8.521"
              transform="translate(-22846.604 9170.229) rotate(180)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <p>Все файлы:</p>
        </div>
        <div
          className={styles.block_view}
          style={isRotatedAll ? { display: "grid" } : { display: "none" }}
        >
          {documents.map((_item, index) => {
            return (
              <div
                key={index}
                className={
                  _item.selected
                    ? styles.block_view__item + " " + styles.active
                    : styles.block_view__item
                }
              >
                <div className={styles.block_view__item_parameters}>
                  <div className={styles.block_view__item_parameters_action}>
                    <Checkbox
                      size={"large"}
                      onClick={() => checkRecentFiles(_item)}
                    />
                    <p>
                      <svg
                        id="File_Options"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.002"
                        height="6"
                        viewBox="0 0 26.002 6"
                      >
                        <path
                          id="Объединение_593"
                          data-name="Объединение 593"
                          d="M17956.5-6558a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17956.5-6558Zm-10,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17946.5-6558Zm-10,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1,17936.5-6558Z"
                          transform="translate(-17936.5 6560.999)"
                          fill="#717171"
                        />
                      </svg>
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.409"
                      height="14.817"
                      viewBox="0 0 7.409 14.817"
                    >
                      <path
                        id="Контур_5994"
                        data-name="Контур 5994"
                        d="M424.907,20l7.409,7.409-7.409,7.409"
                        transform="translate(-424.907 -20)"
                        fill="#969696"
                      />
                    </svg>
                  </span>
                </div>
                <div className={styles.block_view__item_type}>
                  <svg
                    id="Сгруппировать_16035"
                    data-name="Сгруппировать 16035"
                    xmlns="http://www.w3.org/2000/svg"
                    width="146"
                    height="124"
                    viewBox="0 0 146 124"
                  >
                    <path
                      id="Контур_6933"
                      data-name="Контур 6933"
                      d="M11.906-.467s27.751-.592,31.971.19,9.566,6.511,14.865,9.5,6.928,1.365,23.511,1.961h51.528a11.937,11.937,0,0,1,11.906,11.969v88.193a11.937,11.937,0,0,1-11.906,11.969H11.906A11.937,11.937,0,0,1,0,111.349V11.5A11.937,11.937,0,0,1,11.906-.467Z"
                      transform="translate(0.313 0.682)"
                      fill="#fdb23a"
                      opacity="0.59"
                    />
                    <rect
                      id="Прямоугольник_4759"
                      data-name="Прямоугольник 4759"
                      width="146"
                      height="101.737"
                      rx="4"
                      transform="translate(0 22.263)"
                      fill="#fdab3c"
                    />
                    <rect
                      id="Прямоугольник_4760"
                      data-name="Прямоугольник 4760"
                      width="146"
                      height="2.52"
                      rx="1.26"
                      transform="translate(0 104.031)"
                      fill="#ffbc60"
                    />
                    <rect
                      id="Прямоугольник_4761"
                      data-name="Прямоугольник 4761"
                      width="146"
                      height="2.52"
                      rx="1.26"
                      transform="translate(0 109.386)"
                      fill="#ffbc60"
                    />
                    <path
                      id="Контур_8854"
                      data-name="Контур 8854"
                      d="M-1.063,13.463q-.3-.749-.8-1.9t-1.069-2.5Q-3.5,7.719-4.148,6.3T-5.367,3.615Q-5.939,2.35-6.436,1.351t-.8-1.53Q-7.565,3.505-7.775,7.8t-.361,8.662H-11q.12-2.809.271-5.666t.346-5.619q.2-2.763.421-5.385t.5-4.963H-6.9Q-6.09-3.8-5.157-1.926t1.866,3.918q.933,2.045,1.806,4.089t1.6,3.73q.722-1.686,1.6-3.73T3.512,1.991Q4.445-.053,5.378-1.926T7.124-5.173H9.682Q10.706,5.285,11.217,16.46H8.358Q8.207,12.089,8,7.8T7.455-.178q-.3.531-.8,1.53T5.589,3.615Q5.017,4.879,4.37,6.3T3.151,9.062q-.572,1.342-1.069,2.5t-.8,1.9Zm16.856,3V-5.173H28.374v2.591H18.712V3.942H27.29V6.5H18.712V16.46ZM36.8,14.306q4.575,0,4.575-3.246a3.344,3.344,0,0,0-.406-1.7,4.022,4.022,0,0,0-1.1-1.217,7.55,7.55,0,0,0-1.58-.89Q37.4,6.876,36.41,6.5a18.792,18.792,0,0,1-2.167-.921,7.567,7.567,0,0,1-1.776-1.217,5.159,5.159,0,0,1-1.189-1.67A5.671,5.671,0,0,1,30.842.353,5.513,5.513,0,0,1,32.708-4.08a7.681,7.681,0,0,1,5.147-1.592,13.129,13.129,0,0,1,3.446.421,7.718,7.718,0,0,1,2.272.921l-.933,2.466a8.065,8.065,0,0,0-1.881-.8,9.763,9.763,0,0,0-2.9-.39,6.223,6.223,0,0,0-1.565.187,3.941,3.941,0,0,0-1.264.562,2.743,2.743,0,0,0-.858.952A2.786,2.786,0,0,0,33.852.009a2.974,2.974,0,0,0,.331,1.467,3.356,3.356,0,0,0,.933,1.046,7.935,7.935,0,0,0,1.4.827q.8.375,1.761.749,1.354.562,2.483,1.124a8.07,8.07,0,0,1,1.956,1.342A5.379,5.379,0,0,1,44,8.422a6.734,6.734,0,0,1,.451,2.606,5.173,5.173,0,0,1-2,4.37,9.123,9.123,0,0,1-5.644,1.53,13.968,13.968,0,0,1-2.272-.172,16.39,16.39,0,0,1-1.851-.406,10.454,10.454,0,0,1-1.4-.5q-.587-.265-.918-.453l.873-2.5a12.923,12.923,0,0,0,2.107.905A10.469,10.469,0,0,0,36.8,14.306Zm9.15,5.182a5.194,5.194,0,0,0,.858.3,4.018,4.018,0,0,0,1.038.14,3.972,3.972,0,0,0,2.589-.765,6.577,6.577,0,0,0,1.686-2.482q-1.9-3.746-3.537-7.944A70.838,70.838,0,0,1,45.862.228h3.01q.331,1.4.8,3.028T50.707,6.6q.572,1.717,1.234,3.434t1.385,3.309q1.144-3.278,1.987-6.493t1.6-6.618H59.8Q58.714,4.816,57.39,9.046T54.53,16.959a16.882,16.882,0,0,1-1.249,2.419,7.214,7.214,0,0,1-1.43,1.67,5.157,5.157,0,0,1-1.761.968,7.265,7.265,0,0,1-2.212.312,5.39,5.39,0,0,1-.692-.047q-.361-.047-.707-.125t-.632-.172a3.026,3.026,0,0,1-.406-.156Zm20.437-5.119a5.339,5.339,0,0,0,2.543-.468,1.594,1.594,0,0,0,.828-1.5,2.014,2.014,0,0,0-.813-1.686,12.72,12.72,0,0,0-2.679-1.4q-.9-.375-1.731-.765a6.04,6.04,0,0,1-1.43-.921,4,4,0,0,1-.963-1.28A4.22,4.22,0,0,1,61.784,4.5a4.2,4.2,0,0,1,1.535-3.418A6.387,6.387,0,0,1,67.5-.178,11.306,11.306,0,0,1,68.827-.1q.662.078,1.234.187T71.07.321q.436.125.677.219l-.512,2.5a6.9,6.9,0,0,0-1.415-.515A8.818,8.818,0,0,0,67.5,2.257a4.155,4.155,0,0,0-2.047.484,1.612,1.612,0,0,0-.873,1.514,2.132,2.132,0,0,0,.2.936,2.143,2.143,0,0,0,.6.734,4.912,4.912,0,0,0,1.008.609q.6.281,1.445.593,1.114.437,1.987.858a6.2,6.2,0,0,1,1.49.983,3.767,3.767,0,0,1,.948,1.358,5.086,5.086,0,0,1,.331,1.951,3.92,3.92,0,0,1-1.61,3.4,7.8,7.8,0,0,1-4.59,1.155,11.587,11.587,0,0,1-3.251-.359,16.582,16.582,0,0,1-1.6-.546l.512-2.5q.482.187,1.535.562A8.562,8.562,0,0,0,66.389,14.368Z"
                      transform="translate(42.203 59.544)"
                      fill="#d98d26"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p className={styles.block_view__item_information}>
                    <span className={styles.block_view__item_information__name}>
                      {_item.who_changed_upload}
                    </span>
                  </p>
                  <p className={styles.block_view__item_number_of_files}>
                    6 файлов 2 папки
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
