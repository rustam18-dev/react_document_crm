import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { documentActions } from "../store/document/document.slice.ts"

const actions = {
  ...documentActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
