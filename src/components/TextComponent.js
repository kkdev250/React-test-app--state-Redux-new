import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TextComponent = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const clickCount = useSelector((state) => state.counter.value);
  const inputValue = useSelector((state) => state.input.value);

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input value: {inputValue}</p>
      <p>Button click count: {clickCount}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default React.memo(TextComponent);