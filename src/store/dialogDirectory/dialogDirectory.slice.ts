import { createSlice } from "@reduxjs/toolkit"

type DialogDirectoryState = {
  visibilityDialogDirectory: boolean
}

const initialState: DialogDirectoryState = {
  visibilityDialogDirectory: false,
}

export const dialogDirectorySlice = createSlice({
  name: "dialogDirectory",
  initialState,
  reducers: {
    toggleDialogDirectory(state) {
      state.visibilityDialogDirectory = !state.visibilityDialogDirectory
    },
  },
})

export const dialogDirectoryActions = dialogDirectorySlice.actions
export const dialogDirectoryReducer = dialogDirectorySlice.reducer
