import { IIconProps } from 'components/Icon/Icon.types';
import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IButtonIconProps extends IIconProps {
  position: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: 'red' | 'blue' | 'lightGreen' | 'gold' | 'black' | 'white' | 'transparent';
  buttonSize?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  iconProps?: IButtonIconProps;
  isfullWidth?: boolean;
  label?: string;
  loading?: boolean;
  selected?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
}
