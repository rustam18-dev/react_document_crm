import {
  Dialog,
  RadioButton,
  TextArea,
  TextBox,
} from "@progress/kendo-react-all"
import { DialogDirectoryTitle } from "./DialogDirectoryTitle.tsx"

type Props = {
  onClose: () => void
}

export const DialogDirectory = ({ onClose }: Props) => {
  return (
    <>
      <Dialog
        title={<DialogDirectoryTitle onClose={onClose} />}
        className="directory_dialog"
        closeIcon={false}
      >
        <div className="directory_dialog__content">
          <form className="directory_dialog__content__form">
            <div>
              <label>Наименнование</label>
              <TextBox
                className="directory_dialog__content__form__name"
                placeholder={"Новая папка"}
              />
            </div>
            <div>
              <label>Комментарий</label>
              <TextArea
                className="directory_dialog__content__form__comment"
                placeholder={"Введите комментарий"}
              />
            </div>
            <div className="directory_dialog__content__form__block_tag">
              <label>Выберите тег</label>
              <div className="directory_dialog__content__form__block_tag__tags">
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#ffffff" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#5f9dff" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#9f4698" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#f94894" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#f64e4f" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#ff7323" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#fbc139" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#43ae3c" }}
                />
                <RadioButton
                  name={"tag"}
                  style={{ backgroundColor: "#999999" }}
                />
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  )
}
