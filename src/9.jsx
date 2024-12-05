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
          bgcolor="#6A6352"
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
          bgcolor="#D5CCAB"
          width="100%"
          height="90%"
          display="flex"
        >
          <Box
            bgcolor="purple"
            width="35%"
            height="90%"
            margin="10px"
          >
            <img 
                width="100%"
                height="100%"
                src="./im38.png" alt="" />
          </Box>

          <Box
            bgcolor="cyan"
            width="68%"
            height="90%"
            margin="10px"
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#D5CCAB"
              width="100%"
              height="50%"
              display="flex"
              justifyContent="space-between"

            >
              <Box
                bgcolor="purple"
                width="49%"
                height="100%"
                marginRight="2px"
              >
                <img 
                width="100%"
                height="100%"
                src="./im36.png" alt="" />
              </Box>

              <Box
                bgcolor="brown"
                width="49%"
                height="100%"
              >
                <img 
                width="100%"
                height="100%"
                src="./im37.png" alt="" />
              </Box>
            </Box>

            <Box
              bgcolor="#D5CCAB"
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
                src="./im35.png" alt="" />
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
                 <a className="link" href="https://www.google.com/maps/place/Ahoy+Burger+Araraquara/@-21.7995247,-48.1810278,17z/data=!3m1!4b1!4m6!3m5!1s0x94b8f354f5860f21:0x6902efda7f2a95ec!8m2!3d-21.7995247!4d-48.1810278!16s%2Fg%2F11fcsr08y9?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                 <Button/>
                 </a>
                
              </Box>

            </Box>
          </Box>

        </Box> 
      </Box>
    </>
  )
}
export default App