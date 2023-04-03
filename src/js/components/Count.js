import React, { useState } from 'react';

export default function Count(props) {
  const [count, setCount] = useState(props.count);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function handleChange(e) {
    const { value } = e.target;
    const parsedValue = parseInt(value, 10);

    if (Number.isNaN(parsedValue)) {
      setCount('');
      return;
    }

    // NOTE: prevent pasting negative number
    setCount(Math.abs(parsedValue));
  }

  function handleBlur(e) {
    if (e.target.value === '') {
      setCount(0);
    }
  }

  return (
    <div className="flex items-center">
      <button type="button" aria-label="Decrease button" onClick={decreaseCount}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-minus"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <input
        className="w-20 text-center"
        type="text"
        value={count}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-label="Product quantity"
      />
      <button type="button" aria-label="Increase button" onClick={increaseCount}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-plus"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}
