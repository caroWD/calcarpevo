type Props = {
  copy?: string
  figure?: string
  figureText?: string
  perimeterFormula?: string
  areaFormula?: string
  volumeFormula?: string
}

export const CardBody = ({
  copy,
  figure,
  figureText,
  perimeterFormula,
  areaFormula,
  volumeFormula,
}: Props) => {
  return (
    <>
      {figure ? (
        <div className="flex items-center gap-4 p-4 text-slate-800 dark:text-white">
          <img src={figure} alt={figureText} className="w-auto 2xs:w-20" />
          <p className="text-sm leading-normal 2xs:text-base">{copy}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 p-4 text-slate-800 dark:text-white *:text-sm *:leading-normal 2xs:*:text-base">
          {!volumeFormula ? (
            <>
              <p>{perimeterFormula}</p>
              <p>{areaFormula}</p>
            </>
          ) : (
            <p>{volumeFormula}</p>
          )}
        </div>
      )}
    </>
  )
}
