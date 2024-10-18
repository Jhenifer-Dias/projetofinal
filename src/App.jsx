import { Box } from '@mui/material'
import Button from './Button'
import Buttonleft from './Buttonleft'
import Galeria from './Galeria'
import Input from "./Components/Input"
import Checkbox from "./Components/Checkbox"
import Tooltip from "./Components/Tooltip"

function App() {
  return (
    <Box
      width="100%"
      height="100vh">
     
      <Box
        width="100%"
        height="10%"
        bgcolor="#D7BFBD"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    
      > <Box
      marginLeft="10px"><Checkbox/></Box>
        <Box
        
    
        margin="10px"
        fontSize="20px"
       
      >
<Input />
        </Box>
<Box
marginRight="10px"><Tooltip/></Box>

      </Box>
      <Box
        width="100%"
        height="80%"
        bgcolor="purple"
        display="flex"
        flexDirection="row-reverse"
        justifyContent="flex-end"

      >



        <Box
          width="60%"
          height="100%"
          bgcolor="white">
          <Box
            width="100%"
            height="25%"
            bgcolor="#F4EFEC"
            display="flex"
            justifyContent="center"
            alignItems="center"

          >
            <Box
              width="370px"
              height="50px"
              bgcolor="#F2DFDB"
              borderRadius="5px"
              border="2px solid black"
              color="black"
              fontSize="15px"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <h1> Paint Ball</h1>
            </Box>
          </Box>
          <Box
            width="100%"
            height="75%"
            bgcolor="#F4EFEC"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            >
            <Box
              width="70%"
              height="80%"
             >
              <Galeria />
            </Box>
          </Box>
        </Box>
        <Box
          width="40%"
          height="100%"
          bgcolor="blue"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexDirection="column">
          <Box
            width="100%"
            height="30%"
            bgcolor="#F4EFEC"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            paddingTop="5px"


          >
            <Box
              width="200px"
              height="1px"
              bgcolor="red"
              borderRadius="4px "
          
              display="flex"
              alignItems="flex-end"
              justifyContent="flex-end">
              <img src="./imagemp.png" alt=""
                height="150px"
                width="200px"
                border="1px"
                
              />
            </Box>

          </Box>

          <Box
            width="100%"
            height="70%"
            bgcolor="#F4EFEC"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Box
              width="75%"
              height="90%"
              bgcolor="#F2DFDB"
              border="2px solid black"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              margin="20px"
              fontFamily="arial"
              fontSize="17px"
              fontStyle="unset"
              fontWeight=" 900 bold"
              color="black"

            >
              <Box
                height="80%"
                width="100%">
                <p>

                <br />    INFORMAÇÕES <br />
                <br />

                  •40,00$ por jogador<br></br>
                 
                  •Incluso equipamentos com 100 bolinhas<br></br>
                 
                  •jogos de 1h<br></br>
                 
                  •Idade mínima 10 anos <br />
                  

                  •Grupo mínimo de 8 pessoas <br />
                  
                  •Mínimo sao 8 jogadores (se houver menos que 8 será dividido entre o numero de participantes) <br />
                  
                  •Necessário fazer a reserva antecipada do horário <br />
                  
                  •Recargas adicionais com 100 bolinhas: r$25,00 <br />
                  
                  •Para reservar, efetue o pagamento antecipado de R$100,00 que será descontado no jogo de vcs <br />
              

                </p></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        height="10%"
        bgcolor="#D7BFBD"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <p> reclamações</p>
      </Box>
    </Box>
  )
}
export default App