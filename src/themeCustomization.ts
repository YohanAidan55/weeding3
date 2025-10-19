import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Cormorant Upright", serif',
    h1: {
      fontFamily: '"Great Vibes", cursive',
    },
    h2: {
      fontFamily: '"Great Vibes", cursive',
    },
    h3: {
      fontFamily: '"Cormorant Upright", serif',
    },
    h4: {
      fontFamily: '"Cormorant Upright", serif',
    },
    h5: {
      fontFamily: '"Cormorant Upright", serif',
    },
    h6: {
      fontFamily: '"Cormorant Upright", serif',
    },
      body1: {
          fontFamily: '"Cormorant Upright", serif',
          fontSize: '1.25rem', // 18px au lieu de 16px par défaut
      },
      body2: {
      fontFamily: '"Cormorant Upright", serif',
    },
    button: {
      fontFamily: '"Cormorant Upright", serif',
    },
  },
  palette: {
    primary: {
      main: '#6f633d',
    },
    secondary: {
      main: '#b8b89c',
    },
  },
});

export default theme;
