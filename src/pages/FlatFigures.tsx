import FigureOption from '@/components/molecules/FigureOption'
import Main from '@/components/organisms/Main'
import Layout from '@/layouts/Layout'
import { flatFigureOptions } from '@/utils/assetsUtil'

const FlatFigures = () => {
  return (
    <Layout>
      <Main>
        <section className="grow grid grid-cols-2 grid-rows-4 gap-4">
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

export default FlatFigures
