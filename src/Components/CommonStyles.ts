// CommonStyles.ts
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { Shadow } from './Shadow';

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

  generalBox: {
    backgroundColor: Colors.white,
    marginHorizontal: '5%',
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    shadowOffset: { width: Shadow.width, height: Shadow.height },
    shadowOpacity: Shadow.shadowOpacity,
    shadowRadius: Shadow.shadowRadius,
    shadowColor: Shadow.color,
    elevation: Shadow.elevation,
  },

});

export default CommonStyles;
