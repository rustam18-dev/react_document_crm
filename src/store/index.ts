import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { documentReducer } from "./document/document.slice.ts"

export const store = configureStore({
  reducer: {
    document: documentReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
