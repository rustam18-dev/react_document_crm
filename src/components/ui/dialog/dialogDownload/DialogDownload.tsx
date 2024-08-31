import { Dialog } from "@progress/kendo-react-all"
import { DialogDownloadTitle } from "./DialogDownloadTitle.tsx"
import "../../../../assets/css/ui/dialog/dialogDownloadFile.scss"
import { DialogDownloadContent } from "./DialogDownloadContent.tsx"

export const DialogDownload = () => {
  return (
    <div>
      <Dialog
        title={<DialogDownloadTitle />}
        className="download_file"
        closeIcon={false}
      >
        <div>
          <DialogDownloadContent />
        </div>
      </Dialog>
    </div>
  )
}
