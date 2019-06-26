import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const pane = {
  container: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#992222',
  },
};

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
