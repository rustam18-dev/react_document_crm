import { Button } from "@progress/kendo-react-all"
import { X } from "lucide-react"

type Props = {
  onClose: () => void
}

export const DialogDownloadTitle = ({ onClose }: Props) => {
  return (
    <>
      <div className="download_file__title">
        <div>Загрузка файлов</div>
        <div className="download_file__title__block_btn">
          <Button
            onClick={onClose}
            className="download_file__title__block_btn__cancel"
          >
            Отменить все загрузки
          </Button>
          <Button className="download_file__title__block_btn__continue">
            Продолжить
          </Button>
        </div>
      </div>
      <div className="close_dialog_download" onClick={onClose}>
        <div>
          <X color="white" />
        </div>
      </div>
    </>
  )
}
