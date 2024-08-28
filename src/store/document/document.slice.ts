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
  },
})

export const documentActions = documentSlice.actions
export const documentReducer = documentSlice.reducer
