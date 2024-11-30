import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme =  createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    error: {
      main: red.A400,
    }
    
  },
  typography: {
    
    fontSize: 13,
  },
})

export default theme;