import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme =  createTheme({
  cssVariables: true,
  palette: {
    secondary: {
      light: '#f44336',
      main: '#f44336',
      dark: '#f44336',
      contrastText: '#fff',
    },
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