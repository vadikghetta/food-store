import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders', async () => {
  render(<App />);
  const hello = screen.getByText("Hello");
  const submitButton = screen.queryByText('submit')
  expect(submitButton).not.toBeInTheDocument()
});
