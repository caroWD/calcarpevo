import { Button, NumberField } from '@/components/molecules'
import { FigureForm, FigureInfo, Main, Result } from '@/components/organisms'
import { FormContextProvider, ResultContextProvider } from '@/context'
import Layout from '@/layouts/Layout'
import { useState } from 'react'
import diagram from '@/assets/diagram-parallelogram-geometric-figure.svg'

export const Parallelogram = () => {
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
              figureType="Paralelogramo"
              figureImage={diagram}
              alternativeText="Diagrama de figura geometrica paralelogramo"
              perimeterFormula="P => a + b + a + b => 2a + 2b"
              areaFormula="A => a * h"
              onClick={nextStep}
            />
          ) : step === 1 ? (
            <FormContextProvider nextStep={nextStep}>
              <FigureForm type="parallelogram">
                <NumberField key={1} label="Defina 'a' (base)" name="sideA" placeholder="ej. 35" />
                <NumberField key={2} label="Defina 'b'" name="sideB" placeholder="ej. 55" />
                <NumberField
                  key={3}
                  label="Defina el ángulo de inclinación"
                  name="angle"
                  placeholder="ej. 45"
                />
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
