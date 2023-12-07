// ExpenseScreen.tsx
import { Colors } from '../../Components/Colors';
import { Mystyles } from '../../Components/MyStyles';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExpenseScreen = () => {
  return (
    <View style={[Mystyles.container, { backgroundColor: Colors.background }]}>
        <Text>"ExpenseScreen"</Text>
      </View>
  );
};

export default ExpenseScreen;
