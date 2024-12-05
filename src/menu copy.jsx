import React from 'react';
import styled from 'styled-components'
import { Box } from '@mui/material';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card shadow">
        <Box
          bgcolor="white"
          width="100%"
          height="50%"
          display="flex"
          flexDirection="line"
          justifyContent="flex-start"
          alignItems="flex-start"
          borderRadius="10px"
        >  
           <Box
          bgcolor="white"
          display="flex"
          margin="6px"
          borderRadius="4px">
          <img 
          width="20%"
          height="60%"
          src="./phone.png" alt="" /></Box>
            
           
        </Box>

          <Box
          bgcolor="white"
          width="100%"
          height="50%"
          display="flex"
          flexDirection="line"
          justifyContent="flex-start"
          alignItems="flex-start"
          borderRadius="10px"
          >
            <Box
          bgcolor=""
          width="20%"
          height="60%"
          display="flex"
          margin="6px"
          borderRadius="4px">
          
          <img 
          width="100%"
          height="100%"
          src="whatssap2.png" alt="" />
          </Box>
          
          <Box
          bgcolor="white"
          width="20%"
          height="">
          <p>(16)997765435</p>
          </Box>
        
        </Box>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 190px;
   height: 100px;
   background: white;
   margin: 10px;
   border-radius: 10px;
   transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   
  }

  .shadow {
   box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
               0 0  0 2px rgb(190, 190, 190),
               0.3em 0.3em 1em rgba(0,0,0,0.3);
  }`;

export default Card;
