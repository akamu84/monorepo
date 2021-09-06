export const getColor = (value: string): string => getComputedStyle(document.documentElement).getPropertyValue(value);

/**
 * @description made for to use the colors in js/jsx files
 */
export const monochromatic = {
  grey10: getColor('--color-grey-10'),
  grey20: getColor('--color-grey-20'),
  grey30: getColor('--color-grey-30'),
  grey40: getColor('--color-grey-40'),
  grey50: getColor('--color-grey-50'),
  grey60: getColor('--color-grey-60'),
  grey70: getColor('--color-grey-70'),
  grey80: getColor('--color-grey-80'),
  grey90: getColor('--color-grey-90'),
};

export const primary = {
  darkGrey: getColor('--color-dark-grey'),
  lightGrey: getColor('--color-light-grey'),
  mediumGrey: getColor('--color-medium-grey'),
  swatch1: getColor('--color-swatch-1'),
  swatch2: getColor('--color-swatch-2'),
};

export const secondary = {
  swatch3: getColor('--color-swatch-3'),
  swatch4: getColor('--color-swatch-4'),
  swatch5: getColor('--color-swatch-5'),
  swatch6: getColor('--color-swatch-6'),
  swatch7: getColor('--color-swatch-7'),
  swatch8: getColor('--color-swatch-8'),
  swatch9: getColor('--color-swatch-9'),
  swatch10: getColor('--color-swatch-10'),
  swatch11: getColor('--color-swatch-11'),
  swatch12: getColor('--color-swatch-12'),
};

export const additional = {
  charcoal: getColor('--color-charcoal'),
  errorRed: getColor('--color-error-red'),
  successGreen: getColor('--color-success-green'),
  linkBlue: getColor('--color-link-blue'),
  black: getColor('--color-black'),
  white: getColor('--color-white'),
};

export const brand = {
  facebook: getColor('--color-facebook'),
  google: getColor('--color-google'),
  linkedin: getColor('--color-linkedin'),
  twitter: getColor('--color-twitter'),
  youtube: getColor('--color-youtube'),
};

export default {
  additional,
  brand,
  monochromatic,
  primary,
  secondary,
};
