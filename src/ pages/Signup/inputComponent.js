import React from 'react';
import { INPUTMAP } from './INPUTMAP';
import './Signup.scss';

function InputComponent() {
  return (
    <div>
      <input
        id={INPUTMAP.id}
        type={INPUTMAP.type}
        placeholder={INPUTMAP.text}
        className="inputTest"
      />
    </div>
  );
}
export default InputComponent;
