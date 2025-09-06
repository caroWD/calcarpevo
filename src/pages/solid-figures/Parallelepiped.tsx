import { Button, NumberField } from '@/components/molecules'
import { FigureForm, FigureInfo, Main, Result } from '@/components/organisms'
import { FormContextProvider, ResultContextProvider } from '@/context'
import Layout from '@/layouts/Layout'
import { useState } from 'react'
import diagram from '@/assets/diagram-parallelepiped-geometric-figure.svg'

export const Parallelepiped = () => {
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
              figureType="Paralelepípedo"
              figureImage={diagram}
              alternativeText="Diagrama de figura geometrica paralelepípeda"
              volumeFormula="V => a * b * c"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="parallelepiped" figure="paralelepípedo">
                <NumberField key={1} label="Defina 'a'" name="sideA" placeholder="ej. 3" />
                <NumberField key={2} label="Defina 'b'" name="sideB" placeholder="ej. 5" />
                <NumberField key={3} label="Defina 'c'" name="sideC" placeholder="ej. 7" />
                <div key={4} className="flex gap-4 *:flex-1">
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
