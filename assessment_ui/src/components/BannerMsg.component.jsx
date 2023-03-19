import React, { useState } from 'react';
import Styled from './styled-css';

function BannerMsg() {
  const [show, setShow] = useState(true);
  
  if (show){
    return (
      <Styled.BannerMsg dismissible onClose={()=>{setShow(false)}}>
        Save up to $500 per year on millions of book titles!
      </Styled.BannerMsg>
    );
  } else {
    return null;
  }
}

export default BannerMsg;