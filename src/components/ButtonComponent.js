import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from '../store/counterSlice';

function ButtonComponent() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const clickCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementAsync());
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default React.memo(ButtonComponent);