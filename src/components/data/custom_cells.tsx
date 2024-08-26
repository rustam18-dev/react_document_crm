import { GridCustomCellProps } from "@progress/kendo-react-all"
import { CalendarDays } from "lucide-react"
import { Badge } from "./badge.tsx"
import { Status } from "./status.tsx"

export const ColumnMenu = () => {
  return <></>
}

export const FileNameCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return (
    <td {...props.tdProps}>
      <div className={"filename_cell"}>
        {dataItem.type_document === ".docx" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="34.828"
            viewBox="0 0 30 34.828"
          >
            <g id="Сгруппировать_17731" transform="translate(-256 -331)">
              <path
                id="Контур_6935"
                d="M3.448,0h23.1A3.448,3.448,0,0,1,30,3.448V31.379a3.448,3.448,0,0,1-3.448,3.448H3.448A3.448,3.448,0,0,1,0,31.379V3.448A3.448,3.448,0,0,1,3.448,0Z"
                transform="translate(256 331)"
                fill="#378fdb"
              />
              <path
                id="Контур_6936"
                d="M3.413,3.617a2.873,2.873,0,0,1-.286-.6L.2-9.241s-.145-.474,0-.667.582-.107.582-.107h1.3a1.072,1.072,0,0,1,.652.107.916.916,0,0,1,.276.564L4.936-.559l2.322-8.72A1.105,1.105,0,0,1,7.6-9.909a1.134,1.134,0,0,1,.712-.107H9.9a1.221,1.221,0,0,1,.742.107.989.989,0,0,1,.3.629L13.172-.4l1.977-8.88a1.307,1.307,0,0,1,.279-.629.69.69,0,0,1,.546-.107h1.237s.511-.089.682.107,0,.676,0,.676L14.908,3.06a1.034,1.034,0,0,1-.3.557A1.019,1.019,0,0,1,14,3.751H12.2a.367.367,0,0,1-.338-.134,1.68,1.68,0,0,1-.217-.557l-2.593-9.6L6.5,3.072a.945.945,0,0,1-.39.545,1.737,1.737,0,0,1-.8.134H3.69S3.554,3.8,3.413,3.617Z"
                transform="translate(261.901 351.726)"
                fill="#fff"
              />
            </g>
          </svg>
        ) : dataItem.type_document === ".xlsx" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="34.828"
            viewBox="0 0 30 34.828"
          >
            <g id="Сгруппировать_17732" transform="translate(-256 -331)">
              <path
                id="Контур_6935"
                d="M3.448,0h23.1A3.448,3.448,0,0,1,30,3.448V31.379a3.448,3.448,0,0,1-3.448,3.448H3.448A3.448,3.448,0,0,1,0,31.379V3.448A3.448,3.448,0,0,1,3.448,0Z"
                transform="translate(256 331)"
                fill="#2fb797"
              />
              <path
                id="Path_1137"
                d="M-2.845,5.59q-1.121,0-.472-.958L1.03-1.674-2.8-7.244q-.657-.958.472-.958H.151a.97.97,0,0,1,.893.526L3.08-4.13,5.113-7.678a.97.97,0,0,1,.9-.52H8.491q1.143,0,.472.958L5.1-1.674,9.485,4.631q.673.958-.472.958H6.522a.989.989,0,0,1-.893-.525L3.08.783.531,5.065a.989.989,0,0,1-.893.525Z"
                transform="translate(268.176 349.548)"
                fill="#fff"
              />
            </g>
          </svg>
        ) : dataItem.type_document === ".pdf" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="34.828"
            viewBox="0 0 30 34.828"
          >
            <g id="Сгруппировать_17733" transform="translate(-256 -331)">
              <path
                id="Контур_6935"
                d="M3.448,0h23.1A3.448,3.448,0,0,1,30,3.448V31.379a3.448,3.448,0,0,1-3.448,3.448H3.448A3.448,3.448,0,0,1,0,31.379V3.448A3.448,3.448,0,0,1,3.448,0Z"
                transform="translate(256 331)"
                fill="#bc534e"
              />
              <path
                id="Контур_6937"
                d="M.655,2.185V-6.442h2.8a10.137,10.137,0,0,1,2.072.129,2.262,2.262,0,0,1,1.242.844,2.678,2.678,0,0,1,.5,1.68,2.815,2.815,0,0,1-.288,1.336,2.366,2.366,0,0,1-.733.85,2.525,2.525,0,0,1-.9.409,9.944,9.944,0,0,1-1.807.124H2.4V2.185ZM2.4-4.983v2.448H3.35A4.5,4.5,0,0,0,4.727-2.67a1.144,1.144,0,0,0,.544-.424,1.16,1.16,0,0,0,.2-.671,1.114,1.114,0,0,0-.277-.777,1.2,1.2,0,0,0-.7-.383,8.373,8.373,0,0,0-1.253-.059ZM8.688-6.442h3.184a6.217,6.217,0,0,1,1.642.165,2.885,2.885,0,0,1,1.3.794,3.769,3.769,0,0,1,.824 1.4,6.367,6.367,0,0,1,.282,2.039A5.67,5.67,0,0,1,15.656-.21a3.8,3.8,0,0,1-.924,1.524A3.062,3.062,0,0,1,13.508,2a5.27,5.27,0,0,1-1.542.182H8.688ZM10.43-4.983V.731h1.3A4.746,4.746,0,0,0,12.784.649a1.608,1.608,0,0,0 .7-.359,1.827,1.827,0,0,0 .456-.833,5.628,5.628,0,0,0 .177-1.58,5.154,5.154,0,0,0-.177-1.536,1.974,1.974,0,0,0-.494-.836,1.658,1.658,0,0,0-.806-.406,7.9,7.9,0,0,0-1.43-.082Zm6.98,7.168V-6.442h5.914v1.459H19.151v2.042h3.6v1.459h-3.6V2.185Z"
                transform="translate(259.011 350.842)"
                fill="#fff"
              />
            </g>
          </svg>
        ) : null}
        {dataItem.filename}
      </div>
    </td>
  )
}

export const DateDownloadCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return (
    <td {...props.tdProps}>
      <div className={"cell"}>
        {dataItem.date_download} <CalendarDays strokeWidth={1} />
      </div>
    </td>
  )
}

export const TypeCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return (
    <td {...props.tdProps}>
      <div className={"cell"}>
        <Badge type_download={dataItem.type_document} />
      </div>
    </td>
  )
}

export const StatusCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return (
    <td {...props.tdProps}>
      <div className={"cell"}>
        <Status status={dataItem.status} />
      </div>
    </td>
  )
}

export const WhoDownloadCell = (props: GridCustomCellProps) => {
  const { dataItem } = props

  return <td {...props.tdProps}>{dataItem.who_changed_upload}</td>
}
