import styles from "./main.module.scss"
import { TabStrip, TabStripTab } from "@progress/kendo-react-all"
import { DocumentLayoutGrid } from "./data/DocumentLayoutGrid.tsx"
import { DialogDirectory } from "./ui/dialog/dialogDirectory/DialogDirectory.tsx"
import { DialogDownload } from "./ui/dialog/dialogDownload/DialogDownload.tsx"
import { Statistics } from "./statistics/statistics.tsx"
import { BlockViewDocument } from "./blockViewDocument/blockViewDocument.tsx"
import { useAppSelector } from "../hooks/redux.ts"
import { Navigation } from "./navigation/navigation.tsx"
import { useState } from "react"

export const Main = () => {
  const { visibilityDialogDownload } = useAppSelector(
    (state) => state.dialogDownload,
  )
  const { visibilityDialogDirectory } = useAppSelector(
    (state) => state.dialogDirectory,
  )
  const [selectedTab, setSelectedTab] = useState(0)
  const [optionLayout, setOptionLayout] = useState(true)
  const [selectedCheck, setSelectedCheck] = useState<string>("")
  return (
    <div className={styles.main}>
      <Navigation
        setOptionLayout={setOptionLayout}
        setSelectedTab={setSelectedTab}
        optionLayout={optionLayout}
        selectedTab={selectedTab}
        setSelectCheck={(key) => setSelectedCheck(key)}
      />
      {visibilityDialogDirectory && <DialogDirectory />}
      {visibilityDialogDownload && <DialogDownload />}
      <TabStrip style={{ width: "100%" }} selected={selectedTab}>
        <TabStripTab title="Мои файлы" contentClassName={styles.tabstrip}>
          <Statistics />

          <div className={styles.table_document}>
            {optionLayout ? (
              <BlockViewDocument />
            ) : (
              <DocumentLayoutGrid selectedCheck={selectedCheck} />
            )}
          </div>
        </TabStripTab>
        <TabStripTab title="Файлы клиента"></TabStripTab>
        <TabStripTab title="Корзина: -">
          <p>Корзина: -</p>
        </TabStripTab>
      </TabStrip>
    </div>
  )
}
