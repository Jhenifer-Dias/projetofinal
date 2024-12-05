import React from 'react';
import styled from 'styled-components'
import { Box } from '@mui/material';


function Menu() {
  return (
    <>

      <Box
        bgcolor="white"
        width="200px"
        height="100px"
        display="flex"
        flexDirection="column"
        justifyContent="column"
        alignItems="column"
        borderRadius="10px"
        border="1px solid black"
        margin="20px"
      >
        <Box
          bgcolor="white"
          width="100%"
          height="50%"
          display="flex"
          alignItems="center"
          borderRadius="10px"
        >
          <Box
            bgcolor="white"
            width="30%"
            height="93%"
            margin="1px"
            
          >
            <img 
          width="100%"
          height="100%"
          src="./email.png" alt="" />
          </Box>
          <p
          font="">........@gmail.com</p>
        </Box>

        <Box
          bgcolor="white"
          width="100%"
          height="50%"
          display="flex"
          alignItems="center"
          borderRadius="10px"
          fontStyle=" "
        >

          <Box
            bgcolor="white"
            width="20%"
            height="93%"
            margin="2px"
          >
            <img 
            width="100%"
            height="93%"
            src="./phone.png" alt="" />
          </Box>
            <p>+55 16 99776-5435</p>
        </Box>

      </Box>
    </>
  )
}
export default Menu