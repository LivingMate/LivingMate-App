// HomeScreen.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeContainer from '../src/Screens/Home/HomeContainer';

test('renders HomeScreenContainer', async () => {
  const { getByText } = render(<HomeContainer />);

  // wait for the component to render
  await waitFor(() => {
    // Check if the text is present in the rendered component
    expect(getByText('이번주할일')).toBeTruthy();
  });
});
