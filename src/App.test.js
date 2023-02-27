import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber"); 
  
  // save the button in a variable
  const btn = screen.getByTestId("addOne"); 
  
  // click the btn
  fireEvent.click(btn); 
  
  // test assumption
  expect(heading).toHaveTextContent("2");
});
