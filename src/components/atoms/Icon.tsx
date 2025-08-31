import type { IconsNames } from '@/models/types'
import { icons } from '../../utils/iconsUtil'

type Props = {
  name: IconsNames
  size: 5 | 6
}

const Icon = ({ name, size }: Props) => {
  const iconSize = size === 5 ? 'size-5' : 'size-6'

  return (
    <img
      src={
        name === 'arrow back'
          ? icons.arrowBack
          : name === 'circle'
            ? icons.circle
            : name === 'close'
              ? icons.close
              : name === 'cone'
                ? icons.cone
                : name === 'cube'
                  ? icons.cube
                  : name === 'cylinder'
                    ? icons.cylinder
                    : name === 'dark mode'
                      ? icons.darkMode
                      : name === 'diamond'
                        ? icons.diamond
                        : name === 'flat figure'
                          ? icons.flatFifure
                          : name === 'light mode'
                            ? icons.lightMode
                            : name === 'more vert'
                              ? icons.moreVert
                              : name === 'parallelogram'
                                ? icons.parallelogram
                                : name === 'polygon'
                                  ? icons.polygon
                                  : name === 'rectangle'
                                    ? icons.rectangle
                                    : name === 'solid figure'
                                      ? icons.solidFigure
                                      : name === 'sphere'
                                        ? icons.sphere
                                        : name === 'square'
                                          ? icons.square
                                          : name === 'trapeze'
                                            ? icons.trapeze
                                            : icons.triangle
      }
      alt={`$(name) icon`}
      className={iconSize}
    />
  )
}

export default Icon
