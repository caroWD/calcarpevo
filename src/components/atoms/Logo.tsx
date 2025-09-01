import { logos } from '@/utils/logoUtil'

type Props = {
  mode: 'light' | 'dark'
}

const Logo = ({ mode }: Props) => {
  return (
    <img
      src={mode === 'light' ? logos.logoLight : logos.logoDark}
      alt="Logo de CalcArPeVo"
      className="h-6 w-auto"
    />
  )
}

export default Logo
