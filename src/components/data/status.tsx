type Props = {
  status: string
}

export const Status = ({ status }: Props) => {
  return (
    <>
      <div className={"status"}>{status}</div>
    </>
  )
}
