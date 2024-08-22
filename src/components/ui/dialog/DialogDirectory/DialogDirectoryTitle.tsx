import { Button } from "@progress/kendo-react-all"
import { CircleHelp, X } from "lucide-react"

type Props = {
  onClose: () => void
}

export const DialogDirectoryTitle = ({ onClose }: Props) => {
  return (
    <div className="directory_dialog__title">
      <div>Новая папка</div>
      <div className="directory_dialog__title__block_btn">
        <Button className="directory_dialog__title__block_btn__help">
          <CircleHelp style={{ display: "flex", alignItems: "center" }} />
        </Button>
        <Button
          onClick={onClose}
          className="directory_dialog__title__block_btn__cancel"
        >
          Отменить
        </Button>
        <Button className="directory_dialog__title__block_btn__save">
          Сохранить
        </Button>
      </div>

      <div className="close_dialog_directory" onClick={onClose}>
        <div>
          <X color="white" />
        </div>
      </div>
    </div>
  )
}
