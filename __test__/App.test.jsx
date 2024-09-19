import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App.jsx';
// import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders the correct content', () => {
    render(<App />);
    const learnReact = screen.getByText(/learn react/i);
    expect(learnReact).toBeTruthy();
  });

  test('has a main section', () => {
    render(<App />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeDefined();
  });
});
