import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store.tsx";
import theme from "./themeCustomization.ts";
import {ThemeProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
      </Provider>
  </StrictMode>,
)
