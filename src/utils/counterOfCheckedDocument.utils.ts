import { IFile } from "../components/data/shared-gd-interfaces.ts"

export const counterOfCheckedDocumentUtils = (documents: IFile[]): number => {
  let counter = 0
  documents.forEach((item) => {
    if (item.selected) {
      counter++
    }
  })

  return counter
}
