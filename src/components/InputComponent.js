import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../store/inputSlice';

function InputComponent() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input Value: {inputValue}</p>
      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default React.memo(InputComponent);