import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LogoIcon from '../../Assets/Icons/LogoIcon';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';

interface LoginScreenProps {
  onGoogleLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onGoogleLogin }) => {
  return (
      <View style={styles.container}>
        <LogoIcon />
        <TouchableOpacity style={styles.button} onPress={onGoogleLogin}>
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.theme,
    },
    button: {
      alignItems: 'center',
      backgroundColor: Colors.white,
      justifyContent: 'center',
      width: 228,
      height: 35,
      borderRadius: 56,
      marginTop: 130,
      ...CommonStyles.shadow,
    },
    text: {
      color: Colors.black,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;
