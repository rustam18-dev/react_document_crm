import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { documentReducer } from "./document/document.slice.ts"
import { dialogDirectoryReducer } from "./dialogDirectory/dialogDirectory.slice.ts"
import { dialogDownloadReducer } from "./dialogDownload/dialogDownload.slice.ts"

export const store = configureStore({
  reducer: {
    document: documentReducer,
    dialogDirectory: dialogDirectoryReducer,
    dialogDownload: dialogDownloadReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
