import FigureOption from '@/components/molecules/FigureOption'
import Main from '@/components/organisms/Main'
import Layout from '@/layouts/Layout'
import { solidFigureOptions } from '@/utils/assetsUtil'

const SolidFigures = () => {
  return (
    <Layout>
      <Main>
        <section className="grid grid-cols-2 grid-rows-3 gap-4">
          {solidFigureOptions.map((option) => (
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

export default SolidFigures
