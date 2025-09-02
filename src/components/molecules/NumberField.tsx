type Props = {
  label: string
  value: string
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  minValue?: number
  maxValue?: number
}

const NumberField = ({ label, value, name, placeholder, onChange, minValue, maxValue }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <input
        type="number"
        value={value}
        min={minValue}
        max={maxValue}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-sm border border-slate-300 dark:border-slate-800 p-3 bg-slate-200 dark:bg-slate-900 text-base text-slate-800 dark:text-white leading-4 placeholder:text-slate-400 placeholder:leading-4"
      />
    </div>
  )
}

export default NumberField
