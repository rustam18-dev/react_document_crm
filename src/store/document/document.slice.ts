import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import documents from "../../components/data/shared-gd-products.json"
import { IFile } from "../../components/data/shared-gd-interfaces.ts"

type DocumentState = {
  documents: IFile[]
}

const initialState: DocumentState = {
  documents: documents,
}

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    checkRecentFiles(state, action: PayloadAction<IFile>) {
      state.documents = state.documents.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.selected) {
            return {
              ...item,
              selected: false,
            }
          }
          return {
            ...item,
            selected: true,
          }
        }
        return item
      })
    },
    selectAllFiles(state, action: PayloadAction<boolean>) {
      state.documents = state.documents.map((item) => ({
        ...item,
        selected: action.payload,
      }))
    },
    actionOnDocuments(state, action: PayloadAction<string>) {
      state.documents = state.documents
        .filter((item) => {
          if (action.payload === "delete_selected") {
            return !item.selected
          }
          return true
        })
        .map((item) => {
          if (action.payload === "remove_selection") {
            delete item.selected
          }
          return item
        })
    },
  },
})

export const documentActions = documentSlice.actions
export const documentReducer = documentSlice.reducer
