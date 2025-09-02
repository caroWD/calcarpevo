type Props = {
  copy?: string
  figure?: string
  figureText?: string
  perimeterFormula?: string
  areaFormula?: string
}

export const CardBody = ({ copy, figure, figureText, perimeterFormula, areaFormula }: Props) => {
  return (
    <>
      {figure ? (
        <div className="flex items-center gap-4 p-4 text-slate-800 dark:text-white">
          <img src={figure} alt={figureText} />
          <p className="text-sm leading-normal">{copy}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 p-4 text-slate-800 dark:text-white">
          <p className="text-sm leading-normal">{perimeterFormula}</p>
          <p className="text-sm leading-normal">{areaFormula}</p>
        </div>
      )}
    </>
  )
}
