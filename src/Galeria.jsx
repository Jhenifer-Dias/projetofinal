//Execute:  npm i @mui/icons-material

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
'img2.png',
'img3.png',
'img4.png',
'img5.jpg',
'img6.jpg',
'img7.jpg',

'img9.jpg',
'img10.jpg'
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
      <Box 
      border="1px solid black"
      borderRadius="10px"
      component="img" src={images[currentIndex]} alt="slider image" width="90%" height="90%" />
      <IconButton onClick={handleNext} style={{ position: 'absolute', right: 0 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}

export default Galeria;