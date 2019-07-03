import { Dimensions } from 'react-native';
import { fromJS } from 'immutable';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export const spacing = fromJS({
  row: 5,
});

export const padding = fromJS({
  row: 5,
  cell: 5,
});

export const pane = fromJS({
  flex: 1,
  borderWidth: 1,
  borderRightWidth: 0,
  borderColor: '#999',
  padding: padding.get('cell'),
  height: '100%',
  backgroundColor: 'rgba(255,255,255,0.5)',
});

export const paneEditor = fromJS({
  flex: 1,
  padding: padding.get('cell'),
});

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
