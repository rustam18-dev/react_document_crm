import * as React from "react"
import {
  Grid,
  GridColumn as Column,
  GridExpandChangeEvent,
  GridGroupChangeEvent,
} from "@progress/kendo-react-grid"
import {
  groupBy,
  GroupDescriptor,
  GroupResult,
} from "@progress/kendo-data-query"

import { setExpandedState, setGroupIds } from "@progress/kendo-react-data-tools"

import products from "./shared-gd-products.json"
import { IFile } from "./shared-gd-interfaces"
import {
  GridCustomCellProps,
  GridHeaderSelectionChangeEvent,
  GridSelectionChangeEvent,
} from "@progress/kendo-react-all"

const DATA_ITEM_KEY = "id"
const SELECTED_FIELD = "selected"
const initialGroup: GroupDescriptor[] = [{ field: "is_recent_file" }]

const processWithGroups = (data: IFile[], group: GroupDescriptor[]) => {
  const newDataState = groupBy(data, group)
  setGroupIds({ data: newDataState, group: group })

  return newDataState
}

export const DocumentLayoutGrid = () => {
  const [group, setGroup] = React.useState(initialGroup)
  const [resultState, setResultState] = React.useState<IFile[] | GroupResult[]>(
    processWithGroups(products, initialGroup),
  )
  const [collapsedState, setCollapsedState] = React.useState<string[]>([])

  const onGroupChange = React.useCallback((event: GridGroupChangeEvent) => {
    const newGroups = event.group
    const areNewGroupsUnique = !newGroups.some(
      (item, index) =>
        newGroups.findIndex((group) => group.field === item.field) !== index,
    )

    if (areNewGroupsUnique) {
      const newDataState = processWithGroups(products, event.group)
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
    const newData = resultState.map((states) => {
      states.items.forEach((item: IFile) => {
        if (item.id === e.dataItem.id) {
          if (!item.selected) {
            item.selected = true
          } else {
            delete item.selected
          }
        }
      })

      return states
    })

    // @ts-ignore
    setResultState(newData)
  }

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent) => {
      const checkboxElement: boolean = event.syntheticEvent.target.checked

      let result: (IFile | GroupResult)[] = []

      if (checkboxElement) {
        result = resultState.map((states) => {
          states.items.forEach((item: IFile) => {
            item.selected = true
          })

          return states
        })
      } else {
        result = resultState.map((states) => {
          states.items.forEach((item: IFile) => {
            item.selected = false
          })

          return states
        })
      }

      // @ts-ignore
      setResultState(result)
    },
    [],
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
        filter="numeric"
        width={150}
      />
      <Column
        field="type_document"
        columnMenu={ColumnMenu}
        title="Тип документа"
        filter="numeric"
        width={170}
      />
      <Column
        field="status"
        columnMenu={ColumnMenu}
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
        title="Кто загрузил / изменил"
      />
    </Grid>
  )
}
export const ColumnMenu = () => {
  return <></>
}

export const FileNameCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return (
    <td {...props.tdProps}>
      {dataItem.ProductID} {dataItem.filename}
    </td>
  )
}
