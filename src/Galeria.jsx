//Execute:  npm i @mui/icons-material

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
'https://th.bing.com/th?id=ORMS.baa0fc7badc415abd37396ce4ac333a2&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
'https://th.bing.com/th?id=ORMS.b0e90160a53335243f7dc576fc9e7580&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0',
'https://th.bing.com/th?id=ORMS.5e6a7a17baa760ef27278148af0c8dee&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0'
];

function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" position="relative" width="100%" height="400px">
      <IconButton onClick={handlePrev} style={{ position: 'absolute', left: 0 }}>
        <ArrowBackIos />
      </IconButton>
      <Box component="img" src={images[currentIndex]} alt="slider image" width="90%" height="90%" />
      <IconButton onClick={handleNext} style={{ position: 'absolute', right: 0 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}

export default Galeria;