export interface IDropdownData {
  id: number
  title: string
  key: string
}

export const dropdownData: IDropdownData[] = [
  {
    id: 1,
    title: "Cнять выбор",
    key: "remove_selection",
  },
  {
    id: 2,
    title: "Загрузить как ZIP",
    key: "download_zip",
  },
  {
    id: 3,
    title: "Удалить выбранные",
    key: "delete_selected",
  },
  {
    id: 4,
    title: "Переместить в папку ...",
    key: "move_to_folder",
  },
]
