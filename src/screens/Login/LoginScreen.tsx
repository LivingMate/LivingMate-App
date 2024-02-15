import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LogoIcon from '../../assets/icons/LogoIcon';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import { useNavigation } from '@react-navigation/native';

interface LoginScreenProps {
  onLogin?: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const navigation = useNavigation();
  
  const handleLogin = () => {
    if(onLogin) onLogin();
    navigation.navigate('EntryGroup' as never);
  }

  const handleSignup = () => {
    if(onLogin) onLogin();
    navigation.navigate('Signup' as never);
  }
  
  return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={{ width: 220, height: 220, marginBottom: 100 }}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 15}} onPress={handleSignup}>
          <Text style={[styles.text, {color: '#FFFFFF'}]}>회원가입</Text>
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
      marginVertical: 10,
      ...CommonStyles.shadow,
    },
    text: {
      color: Colors.black,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;
