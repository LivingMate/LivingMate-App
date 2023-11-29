import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

const CustomSafeAreaView: React.FC<SafeAreaViewProps> = ({ children, ...props }) => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
