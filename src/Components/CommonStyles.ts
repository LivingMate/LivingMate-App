// CommonStyles.ts
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

const CommonStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  
  safearea: {
    backgroundColor: Colors.background,
    alignItems: 'center',
  },

  section: {
    zIndex: 2,
    width: '100%',
  },
});

export default CommonStyles;
