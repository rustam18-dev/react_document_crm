type Props = {
  type_download: string
}

export const Badge = ({ type_download }: Props) => {
  const backgroundColors: { [key: string]: string } = {
    ".docx": "#25bde5",
    ".xlsx": "#2fb797",
    ".pdf": "#bc534e",
  }

  const generateBackgroundColor = (): string => {
    return backgroundColors[type_download] || "#25bde5"
  }

  return (
    <div
      className={"badge"}
      style={{ backgroundColor: generateBackgroundColor() }}
    >
      *{type_download}
    </div>
  )
}
