import { fromJS } from 'immutable';

const gray = '#7D7C7A'; // Trolley Gray
const blue = '#A8F9FF'; // Waterspout
const yellow = '#FFCA3A'; // Sunglow
const orange = '#E24E1B'; // Flame
const brown = '#654236'; // Van Dyke Brown

const tintColor = orange;

export const paletteOne = fromJS({
  primary: yellow,
  secondary: brown,
  cta: orange,
  disabled: gray,

  tintColor,
  tabIconDefault: gray,
  tabIconSelected: orange,
  tabBar: blue,
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
});


// Palette Option #2
export const paletteTwo = fromJS({
  primary: '#7295A0',
  secondary: '#A3BFA8',
  dark: '#59594A',
  light: '#CDE7B0',
  contrast: '#BE6E46',

  tabIconDefault: '#7295A0',
  tabIconSelected: '#BE6E46',
});

export default paletteTwo;
