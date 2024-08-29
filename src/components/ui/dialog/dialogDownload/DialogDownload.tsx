import {
  Dialog,
  Upload,
  UploadFileInfo,
  UploadListItemProps,
} from "@progress/kendo-react-all"
import { DialogDownloadTitle } from "./DialogDownloadTitle.tsx"
import { CircleCheck, CirclePlus, CircleX } from "lucide-react"
import { useEffect, useRef } from "react"
import "../../../../assets/css/ui/dialog/dialogDownloadFile.scss"

export const DialogDownload = () => {
  const documentsRef = useRef<HTMLDivElement | null>(null)
  const block_upload = useRef<HTMLDivElement | null>(null)
  const btn_upload = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (btn_upload.current && block_upload.current) {
      block_upload.current.appendChild(btn_upload.current)
    }
  }, [block_upload, btn_upload])

  const handleAddFiles = () => {
    const kUploadFiles = document.querySelector(
      ".k-upload-files",
    ) as HTMLElement

    if (kUploadFiles && documentsRef.current) {
      documentsRef.current.appendChild(kUploadFiles)
    }
  }

  return (
    <>
      <Dialog
        title={<DialogDownloadTitle />}
        className="download_file"
        closeIcon={false}
      >
        <div ref={documentsRef} className="download_file__content"></div>
        <div className="download_file__line" />
        <div className="download_file__add_file">
          <p>Добавить ещё файлы?</p>
          <div className="download_file__add_file__block" ref={block_upload}>
            <div className="download_file__add_file__block__add">
              <p>Перетащите сюда или нажмите здесь чтобы добавить ещё файлы</p>
            </div>
          </div>
        </div>

        <div ref={btn_upload}>
          <Upload
            className={"upload_button"}
            batch={true}
            multiple={true}
            defaultFiles={[]}
            withCredentials={false}
            showFileList={true}
            listItemUI={CustomListItemUI}
            selectMessageUI={CustomSelectMessageUI}
            onAdd={handleAddFiles}
            saveUrl={
              "https://demos.telerik.com/kendo-ui/service-v4/upload/save"
            }
            removeUrl={
              "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
            }
          />
        </div>
      </Dialog>
    </>
  )
}

const CustomListItemUI = (props: UploadListItemProps) => {
  return (
    <ul className={"download_file__content"}>
      {props.files.map((file: UploadFileInfo, index) => (
        <li className={"download_file__content__item"} key={index}>
          <div className="download_file__content__item__first">{file.uid}</div>
          <div className="download_file__content__item__second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="34.828"
              viewBox="0 0 30 34.828"
            >
              <g transform="translate(-256 -331)">
                <path
                  d="M3.448,0h23.1A3.448,3.448,0,0,1,30,3.448V31.379a3.448,3.448,0,0,1-3.448,3.448H3.448A3.448,3.448,0,0,1,0,31.379V3.448A3.448,3.448,0,0,1,3.448,0Z"
                  transform="translate(256 331)"
                  fill={"#000"}
                />
                <path transform="translate(261.901 351.726)" fill="#fff" />
              </g>
            </svg>
          </div>
          <div className="download_file__content__item__third">{file.name}</div>
          <div className="download_file__content__item__fourth">
            <CircleCheck color={"orange"} />
          </div>
          <div className="download_file__content__item__fifth">
            <span>{file.progress}</span>
            <span>
              <CircleX color={"grey"} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export const CustomSelectMessageUI = () => {
  return (
    <>
      <CirclePlus size={100} />
    </>
  )
}
