// __tests__/HomeScreen.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../src/screens/Home/HomeScreen';

// Mocked API data
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ id: 1, title: 'Test Post 1' }, { id: 2, title: 'Test Post 2' }] })),
}));

describe('HomeScreen', () => {
  it('renders a list of posts', async () => {
    const { getByText } = render(<HomeScreen />);

    // Wait for posts to be loaded
    await waitFor(() => getByText('Test Post 1'));

    // Check if posts are rendered
    expect(getByText('Test Post 1')).toBeTruthy();
    expect(getByText('Test Post 2')).toBeTruthy();
  });

  it('navigates to PostDetailScreen when a post is pressed', async () => {
    const { getByText, getByTestId } = render(<HomeScreen />);

    // Wait for posts to be loaded
    await waitFor(() => getByText('Test Post 1'));

    // Simulate press on a post
    fireEvent.press(getByTestId('post-1'));

    // Check if navigation occurred
    expect(getByTestId('post-detail-title')).toBeTruthy();
  });
});
