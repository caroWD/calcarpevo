import { ResultContext, type IResultContext } from '@/context/index'
import { useContext, type JSX } from 'react'

type Props = {
  children: JSX.Element
}

export const Result = ({ children }: Props) => {
  const {
    result: { perimeter, area, volume },
  } = useContext(ResultContext) as IResultContext

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col flex-1 *:flex-1 *:flex *:flex-col *:justify-center *:items-center *:gap-4 **:font-semibold **:text-2xl **:leading-none">
        {!volume ? (
          <>
            <hgroup>
              <h3>Perímetro</h3>
              <p className="last:text-indigo-700 last:font-normal last:text-[3.25rem]">
                {perimeter}
              </p>
            </hgroup>
            <hgroup>
              <h3>Área</h3>
              <p className="last:text-indigo-700 last:font-normal last:text-[3.25rem]">{area}</p>
            </hgroup>
          </>
        ) : (
          <hgroup>
            <h3>Volumen</h3>
            <p>{volume}</p>
          </hgroup>
        )}
      </div>
      {children}
    </section>
  )
}
