// EntryGroupContainer.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import EntryGroupScreen from './EntryGroupScreen';

const EntryGroupContainer: React.FC = () => {
  const navigation = useNavigation();

  const navigateNext = (next: string) => {
    navigation.navigate(next as never);
  }

  return <EntryGroupScreen handleEntry={(next)=>navigateNext(next)}/>;
};

export default EntryGroupContainer;
