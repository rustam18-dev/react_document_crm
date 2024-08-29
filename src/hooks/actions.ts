import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { documentActions } from "../store/document/document.slice.ts"
import { dialogDirectoryActions } from "../store/dialogDirectory/dialogDirectory.slice.ts"
import { dialogDownloadActions } from "../store/dialogDownload/dialogDownload.slice.ts"

const actions = {
  ...documentActions,
  ...dialogDirectoryActions,
  ...dialogDownloadActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
