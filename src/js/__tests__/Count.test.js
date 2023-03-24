import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Count from '../components/Count';

const setup = () => {
  render(<Count />);

  const increaseBtn = screen.getByRole('button', { name: /increase button/i });
  const decreaseBtn = screen.getByRole('button', { name: /decrease button/i });
  const input = screen.getByRole('textbox');

  return {
    increaseBtn,
    decreaseBtn,
    input,
  };
};

describe('Count component', () => {
  test('renders successfully', () => {
    const { increaseBtn, decreaseBtn, input } = setup();

    expect(decreaseBtn).toBeInTheDocument();
    expect(increaseBtn).toBeInTheDocument();
    expect(input).toHaveValue('3');
  });

  test('changes value with button clicks', async () => {
    const { increaseBtn, decreaseBtn, input } = setup();

    expect(input).toHaveValue('3');
    await userEvent.click(increaseBtn);
    expect(input).toHaveValue('4');
    await userEvent.click(decreaseBtn);
    expect(input).toHaveValue('3');
  });
});
