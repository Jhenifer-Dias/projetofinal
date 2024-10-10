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
            <h1> Kartódromo Araraquara</h1>
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
            <img src="https://lh3.googleusercontent.com/p/AF1QipOs8ornwEz9cGyX8uWE1skCJVJ6mioouB_ZyoeQ=s680-w680-h510" alt=""
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
            justifyContent="space-evenly"
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
              <p>  •quarta a sábado das 16h até as 22h <br />
                •domingo das 10h às 17h <br />
                •R$130,00 por pessoa para uma corrida de 20 minutos <br />

                •5 minutos de tomada de tempo (posição de largada) e 15 minutos de corrida. <br />
             
                •mínimo 5 pilotos para corridas noturnas e de domingo para que a corrida aconteça. <br />
                •agendaremos você com uma turma ou pode trazer mais 4 amigos com você. <br />

                •Temos macacão, luvas, capacetes, balaclava e protetor cervical.  <br />
                •necessário vir de tênis e chegar com uma hora de antecedência. <br />
                •agendamento deve ser feito com antecedência via WhatsApp<a href="https://bit.ly/3BCRwdz">WhatsApp</a> <br />

                •Importante: O não comparecimento, desistência ou atraso *não* dará direito à devolução da inscrição.


              </p></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default App