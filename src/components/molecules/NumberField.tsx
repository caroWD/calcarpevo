import { FormContext, type IFormContext } from '@/context/index'
import type { NameInputs } from '@/models/types'
import { useContext } from 'react'

type Props = {
  label: string
  name: NameInputs
  placeholder: string
}

export const NumberField = ({ label, name, placeholder }: Props) => {
  const { register, errors } = useContext(FormContext) as IFormContext

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs 2xs:text-sm">
        {label}
      </label>
      <input
        {...register(name)}
        type="number"
        id={name}
        placeholder={placeholder}
        className="rounded-sm border border-slate-300 dark:border-slate-800 p-3 bg-slate-200 dark:bg-slate-900 text-base text-slate-800 dark:text-white leading-4 placeholder:text-slate-400 placeholder:leading-4"
      />
      {errors[name] && (
        <p className="text-[0.625rem] font-light text-red-400">{errors[name].message}</p>
      )}
    </div>
  )
}
