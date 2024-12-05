import { Box } from '@mui/material'
import Input from "./Components/Input"
import Checkbox from "./Components/Checkbox"
import Tooltip from "./Components/Tooltip"
import Button from "./Components/Button"
import "./link.css"

function App() {
  return (
    <>
      <Box
        bgcolor="white"
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
      >

        <Box
          bgcolor="#7ABD87"
          width="100%"
          height="50px"
          display="center"
          justifyContent="space-between"
        >
          <Box
            margin="10px"
          >
            <Checkbox />
          </Box>

          <Box
            margin="10px"
          >
            <Input />
          </Box>

          <Box
            bgcolor=""
            width="50px"
            height="50px"
            marginBottom="40px"
            borderRadius="20px"
          >
            <img 
            width="100%"
            height="100%"
            src="./logo.png" alt="" />

          </Box>

        </Box>

        <Box
          bgcolor="#BCE6FF"
          width="100%"
          height="90%"
          display="flex"
        >
          <Box
            bgcolor="#BCE6FF"
            width="35%"
            height="90%"
            margin="10px"
          >
            <img 
                width="100%"
                height="100%"
                src="./im19.png" alt="" />
          </Box>

          <Box
            bgcolor="#BCE6FF"
            width="68%"
            height="90%"
            margin="10px"
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#BCE6FF"
              width="100%"
              height="50%"
              display="flex"
              justifyContent="space-between"

            >
              <Box
                bgcolor="#BCE6FF"
                width="49%"
                height="100%"
                marginRight="2px"
              >
                <img 
                width="100%"
                height="100%"
                src="./im20.png" alt="" />
              </Box>

              <Box
                bgcolor="#BCE6FF"
                width="49%"
                height="100%"
              >
                <img 
                width="100%"
                height="100%"
                src="./im21.png" alt="" />
              </Box>
            </Box>

            <Box
              bgcolor="#BCE6FF"
              width="100%"
              height="50%"
              display="flex"
              justifyContent="space-between"
              marginRight="2px"
            >

              <Box
                bgcolor="black"
                width="49%"
                height="99%"
                marginTop="2px"
              >
                <img 
                width="100%"
                height="100%"
                src="./im22.png" alt="" />
              </Box>
              <Box
                bgcolor=""
                width="49%"
                height="40%"
                marginTop="70px"
                borderRadius="40px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                 <a className="link" href="https://www.tripadvisor.com.br/Hotel_Review-g800380-d1723675-Reviews-Gran_Hotel_Morada_do_Sol-Araraquara_State_of_Sao_Paulo.html"><Button/></a>
                
              </Box>

            </Box>
          </Box>

        </Box> 
      </Box>
    </>
  )
}
export default App