import * as React from "react"
import {
  Grid,
  GridColumn as Column,
  GridExpandChangeEvent,
  GridGroupChangeEvent,
} from "@progress/kendo-react-grid"
import { groupBy, GroupDescriptor } from "@progress/kendo-data-query"
import { setExpandedState, setGroupIds } from "@progress/kendo-react-data-tools"
import { IFile } from "./shared-gd-interfaces"
import {
  GridHeaderSelectionChangeEvent,
  GridSelectionChangeEvent,
  GroupResult,
} from "@progress/kendo-react-all"
import { useAppSelector } from "../../hooks/redux.ts"
import {
  ColumnMenu,
  DateDownloadCell,
  FileNameCell,
  StatusCell,
  TypeCell,
  WhoDownloadCell,
} from "./custom_cells.tsx"

const DATA_ITEM_KEY = "id"
const SELECTED_FIELD = "selected"
const initialGroup: GroupDescriptor[] = [{ field: "is_recent_file" }]

const processWithGroups = (data: IFile[], group: GroupDescriptor[]) => {
  const newDataState: GroupResult[] | IFile[] = groupBy(data, group)
  setGroupIds({ data: newDataState, group: group })

  const [firstStateItems, secondStateItems] = newDataState
  if (
    "items" in newDataState[1] &&
    "items" in firstStateItems &&
    "items" in secondStateItems
  ) {
    newDataState[1].items = firstStateItems.items.concat(secondStateItems.items)
    newDataState[1].items = newDataState[1].items.map((item) => {
      return {
        ...item,
        is_recent_file: false,
      }
    })
  }

  newDataState.forEach((state, index) => {
    if ("value" in state) {
      state.value = state.value ? "Недавние файлы:" : "Все файлы:"
    }

    if ("items" in state) {
      state.items = state.items.map((item, idx) => ({
        ...item,
        id: `${item.id}-${index}-${idx}`,
      }))
    }
  })

  return newDataState
}

export const DocumentLayoutGrid = () => {
  const { documents } = useAppSelector((state) => state.document)

  const [group, setGroup] = React.useState(initialGroup)
  const [resultState, setResultState] = React.useState<(GroupResult | IFile)[]>(
    processWithGroups(documents, initialGroup),
  )
  const [collapsedState, setCollapsedState] = React.useState<string[]>([])

  const onGroupChange = React.useCallback((event: GridGroupChangeEvent) => {
    const newGroups = event.group
    const areNewGroupsUnique = !newGroups.some(
      (item, index) =>
        newGroups.findIndex((group) => group.field === item.field) !== index,
    )

    if (areNewGroupsUnique) {
      const newDataState = processWithGroups(documents, event.group)
      setGroup(event.group)
      setResultState(newDataState)
    }
  }, [])

  const onExpandChange = React.useCallback(
    (event: GridExpandChangeEvent) => {
      const item = event.dataItem

      if (item.groupId) {
        const newCollapsedIds = !event.value
          ? [...collapsedState, item.groupId]
          : collapsedState.filter((groupId) => groupId !== item.groupId)
        setCollapsedState(newCollapsedIds)
      }
    },
    [collapsedState],
  )

  const newData = setExpandedState({
    data: resultState,
    collapsedIds: collapsedState,
  })

  const onSelectionChange = (e: GridSelectionChangeEvent) => {
    const result = JSON.parse(JSON.stringify(resultState))

    const newData: (GroupResult | IFile)[] = result.map(
      (states: GroupResult | IFile) => {
        if ("items" in states) {
          states.items.forEach((item: IFile) => {
            if (item.id === e.dataItem.id) {
              if (!item.selected) {
                item.selected = true
              } else {
                delete item.selected
              }
            }
          })
        }

        return states
      },
    )

    setResultState(newData)
  }

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent): void => {
      const checkboxElement: boolean = (
        event.syntheticEvent.target as HTMLInputElement
      ).checked

      const result = JSON.parse(JSON.stringify(resultState))

      result.forEach((states: GroupResult | IFile) => {
        if ("items" in states) {
          states.items.forEach((item: IFile) => {
            if (item.is_recent_file) return
            item.selected = checkboxElement
          })
        }
      })

      setResultState(result)
    },
    [resultState],
  )

  return (
    <Grid
      className={"document_layout"}
      style={{ height: "520px" }}
      data={newData}
      sortable={true}
      onGroupChange={onGroupChange}
      group={group}
      onExpandChange={onExpandChange}
      onSelectionChange={onSelectionChange}
      expandField="expanded"
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      onHeaderSelectionChange={onHeaderSelectionChange}
    >
      <Column filterable={false} field={SELECTED_FIELD} width={50} />
      <Column
        field="filename"
        title="Наименование файла / каталога"
        columnMenu={ColumnMenu}
        width={280}
        cells={{
          data: FileNameCell,
        }}
      />
      <Column
        field="date_download"
        columnMenu={ColumnMenu}
        title="Дата загрузки"
        cells={{
          data: DateDownloadCell,
        }}
        filter="numeric"
        width={150}
      />
      <Column
        field="type_document"
        columnMenu={ColumnMenu}
        cells={{
          data: TypeCell,
        }}
        title="Тип документа"
        filter="numeric"
        width={170}
      />
      <Column
        field="status"
        columnMenu={ColumnMenu}
        cells={{
          data: StatusCell,
        }}
        title="Статус"
        width={170}
      />
      <Column
        field="branch"
        columnMenu={ColumnMenu}
        title="Филиал"
        width={170}
      />
      <Column field="office" columnMenu={ColumnMenu} title="Офис" width={170} />
      <Column
        field="who_changed_upload"
        columnMenu={ColumnMenu}
        cells={{
          data: WhoDownloadCell,
        }}
        title="Кто загрузил / изменил"
      />
    </Grid>
  )
}
