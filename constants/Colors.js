import { fromJS } from 'immutable';

const gray = '#7D7C7A'; // Trolley Gray
const blue = '#A8F9FF'; // Waterspout
const yellow = '#FFCA3A'; // Sunglow
const orange = '#E24E1B'; // Flame
const brown = '#654236'; // Van Dyke Brown

const tintColor = orange;

export default fromJS({
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
