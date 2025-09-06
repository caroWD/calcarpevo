import { Button, NumberField } from '@/components/molecules'
import { FigureForm, FigureInfo, Main, Result } from '@/components/organisms'
import { FormContextProvider, ResultContextProvider } from '@/context'
import Layout from '@/layouts/Layout'
import { useState } from 'react'
import diagram from '@/assets/diagram-sphere-geometric-figure.svg'

export const Sphere = () => {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <Layout>
      <Main>
        <ResultContextProvider>
          {step === 0 ? (
            <FigureInfo
              figureType="Esfera"
              figureImage={diagram}
              alternativeText="Diagrama de figura geometrica esferica"
              volumeFormula="V => (4 / 3) * Pi * r ** 3"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="sphere" figure="esfera">
                <NumberField key={1} label="Defina 'r' (radio)" name="radio" placeholder="ej. 3" />
                <div key={2} className="flex gap-4 *:flex-1">
                  <Button type="text" onClick={prevStep}>
                    Atrás
                  </Button>
                  <Button type="submit">Calcular</Button>
                </div>
              </FigureForm>
            </FormContextProvider>
          ) : (
            <Result>
              <Button type="text" onClick={prevStep}>
                Realizar otro cálculo
              </Button>
            </Result>
          )}
        </ResultContextProvider>
      </Main>
    </Layout>
  )
}
