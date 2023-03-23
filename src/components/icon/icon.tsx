import './icon.scss';

import type { IconsType } from './icons';

export interface IconProps {
  name: IconsType
  color?: string,
  size?: number,
}

export const Icon = ({
  color = '#000',
  size = 16,
  ...props
} : IconProps) => {
    const iconStyle = {
      color: color,
      width: `${size}px`,
      height: `${size}px`,
    }

  return (
    <svg className={`acr-icon`} style={iconStyle}>
      <use href={`/src/assets/icons-list.svg#${props.name}` } />
    </svg>
  )
}