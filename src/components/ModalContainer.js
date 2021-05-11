import React from 'react';
import { Link } from 'react-router-dom';

function ModalContainer() {
  return (
    <div>
      <h1>Modal</h1>
      <p>Company information</p>
      <div>
        <Link to="/">Close</Link>
      </div>
    </div>
  );
}

export default ModalContainer;
