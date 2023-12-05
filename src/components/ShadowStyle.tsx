// globalShadowStyles.ts
import { StyleSheet } from 'react-native';

interface ShadowOptions {
  width: number;
  height: number;
  color: string;
  border: number;
  radius: number;
  opacity: number;
  x: number;
  y: number;
}

export const shadowStyles = StyleSheet.create({
  shadowOpt: {
    width: 0,
    height: 5,
    color: '#000',
    border: 10,
    radius: 5,
    opacity: 0.1,
    x: 0,
    y: 0,
  },
});
