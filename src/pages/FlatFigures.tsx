import { FigureOption } from '@/components/molecules/index'
import { Main } from '@/components/organisms/index'
import Layout from '@/layouts/Layout'
import { flatFigureOptions } from '@/utils/assetsUtil'

export const FlatFigures = () => {
  return (
    <Layout>
      <Main>
        <section className="grid grid-cols-2 grid-rows-4 gap-4">
          {flatFigureOptions.map((option) => (
            <FigureOption
              key={option.id}
              label={option.name}
              link={option.link}
              icon={option.icon}
            />
          ))}
        </section>
      </Main>
    </Layout>
  )
}
