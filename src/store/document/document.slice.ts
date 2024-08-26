import { createSlice } from "@reduxjs/toolkit"
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
  reducers: {},
})

export const documentActions = documentSlice.actions
export const documentReducer = documentSlice.reducer
