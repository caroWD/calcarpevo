import { Button, NumberField } from '@/components/molecules'
import { FigureForm, FigureInfo, Main, Result } from '@/components/organisms'
import { FormContextProvider, ResultContextProvider } from '@/context'
import Layout from '@/layouts/Layout'
import { useState } from 'react'
import diagram from '@/assets/diagram-cone-geometric-figure.svg'

export const Cone = () => {
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
              figureType="Cono"
              figureImage={diagram}
              alternativeText="Diagrama de figura geometrica conica"
              volumeFormula="V => (Pi * r ** 2 * h) / 3"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="cone" figure="cono">
                <NumberField key={1} label="Defina 'r' (radio)" name="radio" placeholder="ej. 3" />
                <NumberField
                  key={2}
                  label="Defina 'h' (altura)"
                  name="height"
                  placeholder="ej. 5"
                />
                <div key={3} className="flex gap-4 *:flex-1">
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
