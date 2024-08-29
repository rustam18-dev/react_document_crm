import { createSlice } from "@reduxjs/toolkit"

type DialogDownloadState = {
  visibilityDialogDownload: boolean
}

const initialState: DialogDownloadState = {
  visibilityDialogDownload: false,
}

export const dialogDownloadSlice = createSlice({
  name: "dialogDownload",
  initialState,
  reducers: {
    toggleDialogDownload(state) {
      state.visibilityDialogDownload = !state.visibilityDialogDownload
    },
  },
})

export const dialogDownloadActions = dialogDownloadSlice.actions
export const dialogDownloadReducer = dialogDownloadSlice.reducer
