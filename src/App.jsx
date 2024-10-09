import { Box } from '@mui/material'
import Button from './Button'
import Buttonleft from './Buttonleft'

function App() {
  return (
    <Box
      width="100%"
      height="100vh"
      bgcolor="purple"
      display="flex"
      flexDirection="row-reverse"
      justifyContent="flex-end"
    >
  
    

      <Box
        width="60%"
        height="100%"
        bgcolor="violet">
        <Box
          width="100%"
          height="30%"
          bgcolor="grey"
          display="flex"
          justifyContent="center"
          alignItems="center"
          
          >
        <Box
        width="370px"
        height="70px"
        bgcolor="chocolate"
        borderRadius="5px"
        border="1px solid black">
        </Box>
        </Box>
        <Box
          width="100%"
          height="70%"
          bgcolor="wheat"
          display="flex"
          justifyContent="center"
          alignItems="center">
            <Box> <Buttonleft/> </Box>

            <Box
            width="500px"
            height="350px"
            bgcolor="darksalmon"

            >
              
            </Box>
            <Box>
                <Button/>
              </Box>
        </Box>
      </Box>
      <Box
        width="40%"
        height="100%"
        bgcolor="cyan"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
        flexDirection="column">
        <Box
          width="100%"
          height="30%"
          bgcolor="pink"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"


        >
          <Box
            width="190px"
            height="170px"
            bgcolor="white"
            borderRadius="5px "
            border="1px solid black">
          </Box>

        </Box>

        <Box
          width="100%"
          height="70%"
          bgcolor="blue"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Box
            width="80%"
            height="430px"
            bgcolor="white"
            border="1px solid black"
            borderRadius="5px">
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default App