import { createContext, useContext, type JSX } from 'react'
import {
  useForm,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ResultContext, type IResultContext } from './ResultContextProvider'
import { calculate } from '@/utils/calculateUtils'

const emptyError = 'Campo no definido o negativo.'

const typeEnum = [
  'circle',
  'cone',
  'cube',
  'cylinder',
  'diamond',
  'parallelogram',
  'polygon',
  'pyramid',
  'rectangle',
  'sphere',
  'square',
  'trapeze',
  'triangle',
]

const FormSchema = zod.object({
  type: zod.enum(typeEnum),
  sides: zod.coerce.number<number>().positive(emptyError).optional(),
  sideA: zod.coerce.number<number>().positive(emptyError).optional(),
  sideB: zod.coerce.number<number>().positive(emptyError).optional(),
  sideC: zod.coerce.number<number>().positive(emptyError).optional(),
  diagonal: zod.coerce.number<number>().positive(emptyError).optional(),
  angle: zod.coerce.number<number>().gte(1).lte(89).positive(emptyError).optional(),
})

export type TFormContext = zod.infer<typeof FormSchema>

export interface IFormContext {
  register: UseFormRegister<TFormContext>
  handleSubmit: UseFormHandleSubmit<TFormContext>
  errors: FieldErrors<TFormContext>
  onSubmit: (data: TFormContext) => void
}

export const FormContext = createContext<IFormContext | null>(null)

type Props = {
  children: JSX.Element
  nextStep: () => void
}

export const FormContextProvider = ({ children, nextStep }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormSchema) })

  const { result, handleResult } = useContext(ResultContext) as IResultContext

  const onSubmit = (data: TFormContext) => {
    handleResult(calculate(data, result))
    nextStep()
  }

  return (
    <FormContext.Provider value={{ register, handleSubmit, errors, onSubmit }}>
      {children}
    </FormContext.Provider>
  )
}
