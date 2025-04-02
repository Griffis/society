import React, {useState, useEffect, useRef} from 'react';
import {useKeepAliveEffect} from '../../../es';
import B from './B';

function Test() {
  let [index, setIndex] = useState(0);
  let divRef = useRef();
  useKeepAliveEffect(() => {
    console.log('activated', index);
    console.log(divRef.current.offsetWidth);
    let i = 0;

    return () => {
      console.log('unactivated', index, i);
    };
  });
  return (
    <div>
      <div ref={divRef}>This is a.</div>
      <button onClick={() => setIndex(index + 1)}>click me({index})</button>
    </div>
  );
}

export default Test;
