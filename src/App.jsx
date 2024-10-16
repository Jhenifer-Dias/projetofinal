import { Box } from '@mui/material'
import Button from './Button'
import Buttonleft from './Buttonleft'
import Galeria from './Galeria'

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
        bgcolor="white">
        <Box
          width="100%"
          height="30%"
          bgcolor="#F4EFEC"
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <Box
            width="370px"
            height="70px"
            bgcolor="#D7BFBD"
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
          height="70%"
          bgcolor="#F4EFEC"
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Box>
            <Galeria />
          </Box>
        </Box>
      </Box>
      <Box
        width="40%"
        height="100%"
        bgcolor="#F4EFEC"
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


        >
          <Box
            width="190px"
            height="170px"
            bgcolor="red"
            borderRadius="4px "
            border="2px solid black">
            <img src="./imagemp.png" alt=""
              height="170px"
              width="190px"
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
            bgcolor="#D7BFBD"
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
              height="100%"
              width="100%">
              <p>  
              •40,00$ por jogador<br></br>
              <br />
              •Incluso equipamentos com 100 bolinhas<br></br>
              <br />
              •jogos de 1h<br></br>
<br />
              •Idade mínima 10 anos <br />
              <br />

              •Grupo mínimo de 8 pessoas <br />
              <br />
              •Mínimo sao 8 jogadores (se houver menos que 8 será dividido entre o numero de participantes) <br />
              <br />
              •Necessário fazer a reserva antecipada do horário <br />
              <br />
              •Recargas adicionais com 100 bolinhas: r$25,00 <br />
<br />
              •Para reservar, efetue o pagamento antecipado de R$100,00 que será descontado no jogo de vcs <br />
<br />

              </p></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default App