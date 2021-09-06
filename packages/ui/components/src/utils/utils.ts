import { primary, additional } from '../styles/constants/colors';

export interface IConvertCentsToDollarsOptions {
  divider: boolean;
  rounded: boolean;
  formatted: boolean;
  trimZeros: boolean;
}

export const convertCentsToDollars = (value: string, options: IConvertCentsToDollarsOptions): string | number => {
  let dollars = 0;

  if (value) {
    const cleansedValue = parseFloat(`${value}`.replace(/[^\d.-]/g, ''));
    if (options.divider) {
      dollars = cleansedValue / 100;
    } else {
      dollars = cleansedValue;
    }
  }

  if (options.formatted) {
    if (options.rounded) {
      return dollars.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
    }
    if (options.trimZeros) {
      return dollars
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
        .replace('.00', '');
    }
    return dollars.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  return dollars;
};

export const isiPhone = navigator.userAgent.match(/iPhone/i);

export const limit = (value = 0, min = 0, max = 0): number => Math.max(min, Math.min(max, value));

export const getIconColor = (color: string): string => {
  let iconColor;
  switch (color) {
    case 'red':
      iconColor = primary.swatch1;
      break;
    case 'blue':
      iconColor = additional.linkBlue;
      break;
    case 'white':
      iconColor = additional.white;
      break;
    default:
      iconColor = additional.black;
      break;
  }
  return iconColor;
};

export const getIconSize = (size: string): number => {
  let iconSize;
  switch (size) {
    case 'small':
      iconSize = 14;
      break;
    case 'medium':
      iconSize = 16;
      break;
    case 'large':
      iconSize = 18;
      break;
    default:
      iconSize = 14;
      break;
  }
  return iconSize;
};
