import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Count from '../components/Count';

// NOTE: wrapper is for holding state
const Wrapper = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
};

const setup = () => {
  render(<Wrapper />);

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
    expect(input).toHaveValue('1');
  });

  test('changes value with button clicks', async () => {
    const user = userEvent.setup();
    const { increaseBtn, decreaseBtn, input } = setup();

    expect(input).toHaveValue('1');
    await user.click(increaseBtn);
    expect(input).toHaveValue('2');
    await user.click(decreaseBtn);
    expect(input).toHaveValue('1');
  });

  test("can't decrease quantity below 0", async () => {
    const user = userEvent.setup();
    const { decreaseBtn, input } = setup();

    expect(input).toHaveValue('1');

    await user.click(decreaseBtn);
    await user.click(decreaseBtn);

    expect(input).toHaveValue('0');
  });

  test('allows to type quantity', async () => {
    const user = userEvent.setup();
    const { input } = setup();

    await user.clear(input);
    await user.type(input, '5');
    expect(input).toHaveValue('5');
  });

  test('allows to type only digits', async () => {
    const user = userEvent.setup();
    const { input } = setup();

    await user.clear(input);
    await user.type(input, '-a1.5bc');
    expect(input).toHaveValue('15');
  });

  test('set to 0 on focusout if input is empty', async () => {
    const user = userEvent.setup();
    const { input } = setup();

    await user.clear(input);
    await user.click(document.body); // click outside
    expect(input).toHaveValue('0');
  });
});
