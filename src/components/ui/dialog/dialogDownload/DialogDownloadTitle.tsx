import { Button } from "@progress/kendo-react-all"
import { ChevronLeft, X } from "lucide-react"
import { useActions } from "../../../../hooks/actions.ts"
import { useAppSelector } from "../../../../hooks/redux.ts"

export const DialogDownloadTitle = () => {
  const { toggleDialogDownload, nextStep, prevStep } = useActions()
  const { step } = useAppSelector((state) => state.dialogDownload)
  return (
    <>
      {step === 1 ? (
        <div className="download_file__title">
          <div>Загрузка файлов</div>
          <div className="download_file__title__block_btn">
            <Button
              onClick={() => toggleDialogDownload()}
              className="download_file__title__block_btn__cancel"
            >
              Отменить все загрузки
            </Button>
            <Button
              className="download_file__title__block_btn__continue"
              onClick={() => nextStep()}
            >
              Продолжить
            </Button>
          </div>
        </div>
      ) : (
        <div className={"download_file__title__file_assignment"}>
          <div
            onClick={() => prevStep()}
            className={"download_file__title__file_assignment__prev_button"}
          >
            <ChevronLeft color={"#fff"} />
          </div>
          <div className="download_file__title__file_assignment__title">
            Укажите назначение файлов
          </div>
          <Button className="download_file__title__file_assignment__save">
            Сохранить
          </Button>
        </div>
      )}

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
