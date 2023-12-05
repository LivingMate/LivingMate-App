// HomeScreen.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreenContainer from '../src/Screens/Home/HomeScreenContainer';

test('renders HomeScreenContainer', async () => {
  const { getByText } = render(<HomeScreenContainer />);

  // wait for the component to render
  await waitFor(() => {
    // Check if the text is present in the rendered component
    expect(getByText('이번주할일')).toBeTruthy();
  });
});
