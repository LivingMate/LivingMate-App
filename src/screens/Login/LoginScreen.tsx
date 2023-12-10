import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LogoIcon from '../../../assets/Icons/LogoIcon';
import { Colors } from '../../Components/Colors';

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
      padding: 10,
      width: 228,
      height: 35,
      borderRadius: 56,
      marginTop: 130,
    },
    text: {
      color: Colors.black,
    },
  });

export default LoginScreen;
