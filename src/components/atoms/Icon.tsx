import type { IconsNames } from '@/models/types'
import { icons } from '../../utils/assetsUtil'

type Props = {
  nameIcon: IconsNames
  size: 5 | 6
}

export const Icon = ({ nameIcon, size }: Props) => {
  const iconSize = size === 5 ? 'size-5' : 'size-6'

  return (
    <img
      src={
        nameIcon === 'arrow back'
          ? icons.arrowBack
          : nameIcon === 'circle'
            ? icons.circle
            : nameIcon === 'close'
              ? icons.close
              : nameIcon === 'cone'
                ? icons.cone
                : nameIcon === 'cube'
                  ? icons.cube
                  : nameIcon === 'cylinder'
                    ? icons.cylinder
                    : nameIcon === 'dark mode'
                      ? icons.darkMode
                      : nameIcon === 'diamond'
                        ? icons.diamond
                        : nameIcon === 'flat figure'
                          ? icons.flatFifure
                          : nameIcon === 'flat figure light'
                            ? icons.flatFigureLight
                            : nameIcon === 'light mode'
                              ? icons.lightMode
                              : nameIcon === 'more vert'
                                ? icons.moreVert
                                : nameIcon === 'parallelogram'
                                  ? icons.parallelogram
                                  : nameIcon === 'polygon'
                                    ? icons.polygon
                                    : nameIcon === 'pyramid'
                                      ? icons.pyramid
                                      : nameIcon === 'rectangle'
                                        ? icons.rectangle
                                        : nameIcon === 'solid figure'
                                          ? icons.solidFigure
                                          : nameIcon === 'solid figure light'
                                            ? icons.solidFigureLight
                                            : nameIcon === 'sphere'
                                              ? icons.sphere
                                              : nameIcon === 'square'
                                                ? icons.square
                                                : nameIcon === 'trapeze'
                                                  ? icons.trapeze
                                                  : icons.triangle
      }
      alt={`$(name) icon`}
      className={iconSize}
    />
  )
}
