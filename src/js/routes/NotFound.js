import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Nothing found. <br /> Go to{' '}
      <Link to="/" className="underline">
        the homepage
      </Link>
      ?
    </div>
  );
}
