type Props = {
  type_download: string
}

export const Badge = ({ type_download }: Props) => {
  const generateBackgroundColor = (): string => {
    if (type_download === ".docx") {
      return "#25bde5"
    }
    if (type_download === ".xlsx") {
      return "#2fb797"
    }

    if (type_download === ".pdf") {
      return "#bc534e"
    }

    return "#25bde5"
  }
  return (
    <>
      <div
        className={"badge"}
        style={{ backgroundColor: generateBackgroundColor() }}
      >
        *{type_download}
      </div>
    </>
  )
}
