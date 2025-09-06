import { Icon, LogoCaro } from '../atoms'
import { Button } from '../molecules'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'

type Props = {
  ref: React.RefObject<HTMLDivElement | null>
  onClick: () => void
}

export const Overlay = ({ ref, onClick }: Props) => {
  return (
    <div
      className="absolute top-0 left-0 min-w-dvw min-h-dvh p-4 hidden bg-slate-950/90 backdrop-blur-xs"
      ref={ref}
    >
      <aside className="min-h-[calc(100dvh-(--spacing(8)))] flex flex-col w-full">
        <div className="p-3 border border-transparent">
          <Button type="icon" onClick={onClick}>
            <Icon nameIcon="close" size={5} />
          </Button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-6 text-center 2xs:px-4">
          <LogoCaro />
          <div className="flex flex-col gap-3">
            <p className="text-white">
              CalcArPeVo es una "Single Page Application" (SPA) creada con React, TypeScript,
              Tailwind, React Rooter, React Hook Form, Zod y Motion.
            </p>
            <p className="text-slate-600">
              Es un proyecto con fines formativos en desarrollo FrontEnd.
            </p>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="https://www.linkedin.com/in/cxaxrxo/" target="_blank">
                  <FaLinkedinIn className="size-6 fill-indigo-700" />
                </a>
              </li>
              <li>
                <a href="https://github.com/caroWD" target="_blank">
                  <FaGithub className="size-6 fill-indigo-700" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}
