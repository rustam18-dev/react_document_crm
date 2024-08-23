export interface IFile {
  id: number
  filename: string
  date_download: string
  type_document: string
  status: string
  branch: string
  office: string
  who_changed_upload: string
  selected?: boolean
  is_recent_file: string
}
