import * as React from "react"
import styles from "./DocumentLayoutGrid.module.scss"
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
import { Product } from "./shared-gd-interfaces"

const initialGroup: GroupDescriptor[] = [{ field: "ProductName" }]

const processWithGroups = (data: Product[], group: GroupDescriptor[]) => {
  const newDataState = groupBy(data, group)

  setGroupIds({ data: newDataState, group: group })

  return newDataState
}

export const DocumentLayoutGrid = () => {
  const [group, setGroup] = React.useState(initialGroup)
  const [resultState, setResultState] = React.useState<
    Product[] | GroupResult[]
  >(processWithGroups(products, initialGroup))
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

  return (
    <Grid
      className={styles.box_shadow}
      style={{ height: "520px" }}
      data={newData}
      onGroupChange={onGroupChange}
      group={group}
      onExpandChange={onExpandChange}
      expandField="expanded"
    >
      <Column field="ProductID" filterable={false} title="ID" width="50px" />
      <Column field="ProductName" title="Наименование файла / каталога" />
      <Column field="UnitPrice" title="Дата загрузки" filter="numeric" />
      <Column field="UnitsInStock" title="Тип документа" filter="numeric" />
      <Column field="Category.CategoryName" title="Статус" />
      <Column field="Category.CategoryName" title="Филиал" />
      <Column field="Category.CategoryName" title="Офис" />
      <Column field="Category.CategoryName" title="Кто загрузил / изменил" />
    </Grid>
  )
}
