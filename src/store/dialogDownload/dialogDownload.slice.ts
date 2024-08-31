import { createSlice } from "@reduxjs/toolkit"

type DialogDownloadState = {
  visibilityDialogDownload: boolean
  step: number
}

const initialState: DialogDownloadState = {
  visibilityDialogDownload: true,
  step: 1,
}

export const dialogDownloadSlice = createSlice({
  name: "dialogDownload",
  initialState,
  reducers: {
    toggleDialogDownload(state) {
      state.visibilityDialogDownload = !state.visibilityDialogDownload
    },
    nextStep(state) {
      state.step++
    },
    prevStep(state) {
      state.step--
    },
  },
})

export const dialogDownloadActions = dialogDownloadSlice.actions
export const dialogDownloadReducer = dialogDownloadSlice.reducer
