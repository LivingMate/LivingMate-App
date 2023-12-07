import {StyleSheet} from 'react-native';
import {Colors} from "./Colors"

export const Mystyles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      marginTop: 55,
      backgroundColor: Colors.background,
     // maxHeight: 400,
    },
    box: {
      width: 50,
      height: 80,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '48%',
      textAlign: 'center',
    },
    selected: {
      backgroundColor: 'coral',
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: 'coral',
    },
    selectedLabel: {
      color: 'white',
    },
    label: {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
});