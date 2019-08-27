import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Scroll = (props) => {
  return (
    <div style= {{overflowY: 'scroll', border: '5px solid black', height: '700px'}}>
      {props.children}
    </div>
  )
};

export default Scroll;