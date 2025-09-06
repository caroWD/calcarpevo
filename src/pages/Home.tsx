import { Main } from '@/components/organisms/index'
import Layout from '@/layouts/Layout'
import illustrationDark from '@/assets/two-young-people-studying-math-dark.svg'
import illustration from '@/assets/two-young-people-studying-math.svg'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContextProvider'
import type { ThemeContextType } from '@/models/types'

export const Home = () => {
  const [theme] = useContext(ThemeContext) as ThemeContextType

  return (
    <Layout>
      <Main>
        <section className="grow flex flex-col items-center justify-center gap-6">
          <hgroup className="flex flex-col gap-2 2xs:gap-3 text-center">
            <h2 className="font-bold text-4xl 2xs:text-5xl leading-none after:block after:w-32 after:h-0.5 after:bg-slate-800 after:rounded-full after:mt-2 after:mx-auto">
              Bienvenido
            </h2>
            <p className="text-xs 2xs:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              CalcArPeVo es una SPA para calcular el área y el perímetro de figuras planas y el
              volumen de figuras sólidas.
            </p>
          </hgroup>
          <img
            src={theme === 'dark' ? illustrationDark : illustration}
            alt="Dos jovenes estudiando matemáticas"
            className="w-auto 2xs:w-3/4"
          />
          <p className="text-center text-sm 2xs:text-base">
            Selecciona una de las dos opciones del menú de navegación inferior.
          </p>
        </section>
      </Main>
    </Layout>
  )
}
