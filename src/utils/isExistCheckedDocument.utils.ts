import { IFile } from "../components/data/shared-gd-interfaces.ts"

export const isExistCheckedDocumentUtils = (documents: IFile[]): boolean => {
  return documents.some((item) => !!item.selected)
}
