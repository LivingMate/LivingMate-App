// CommonStyles.ts
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

const CommonStyles = StyleSheet.create({
  safearea: {
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

    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000000',
    elevation: 8,
  },

  plusButtonCotainer:{
    zIndex: 3, // 가장 앞에 위치
    position: 'absolute',
    top: 670,
    width: '95%',
    alignItems: 'flex-end',
  },

  plusButton:{
    backgroundColor: Colors.theme,
    borderRadius: 100,
    width: 56,  
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  shadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
    shadowColor: '#000000',
  }
});

export default CommonStyles;
