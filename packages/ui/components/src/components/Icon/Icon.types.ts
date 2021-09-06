import { SVGProps } from 'react';

type IconNames =
  | 'avatar'
  | 'asterisk'
  | 'business-man'
  | 'calendar'
  | 'chevron-down'
  | 'chevron-up'
  | 'close'
  | 'copy'
  | 'credit-card'
  | 'dollar-sign'
  | 'edit-pencil'
  | 'envelope'
  | 'error-triangle'
  | 'eye-closed'
  | 'eye-open'
  | 'facebook'
  | 'group-walking'
  | 'ham-menu'
  | 'ham-menu-close'
  | 'house-walking'
  | 'info'
  | 'map-filled'
  | 'paypal'
  | 'person-check'
  | 'search'
  | 'sms'
  | 'sort'
  | 'spinner'
  | 'stjudeLogo'
  | 'twitter'
  | 'walking';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  name: IconNames;
  size?: number;
  viewBox?: string;
}

export interface IGroupedIconProps extends Omit<IIconProps, 'name'> {
  name: string[];
  translateProp: string;
}
