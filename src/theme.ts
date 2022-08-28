import { createTheme, PaletteOptions } from '@mui/material'

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#FFCD00',
  },
  background: {
    default: '#242526',
  },
}

export const theme = createTheme({
  palette,
})
