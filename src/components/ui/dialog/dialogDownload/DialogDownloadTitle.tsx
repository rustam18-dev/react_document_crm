import { Button } from "@progress/kendo-react-all"
import { X } from "lucide-react"
import { useActions } from "../../../../hooks/actions.ts"

export const DialogDownloadTitle = () => {
  const { toggleDialogDownload } = useActions()
  return (
    <>
      <div className="download_file__title">
        <div>Загрузка файлов</div>
        <div className="download_file__title__block_btn">
          <Button
            onClick={() => toggleDialogDownload()}
            className="download_file__title__block_btn__cancel"
          >
            Отменить все загрузки
          </Button>
          <Button className="download_file__title__block_btn__continue">
            Продолжить
          </Button>
        </div>
      </div>
      <div
        className="close_dialog_download"
        onClick={() => toggleDialogDownload()}
      >
        <div>
          <X color="white" />
        </div>
      </div>
    </>
  )
}
