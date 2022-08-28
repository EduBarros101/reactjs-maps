import {
  Button,
  CssBaseline,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
} from '@mui/material'
import { Navbar } from './Components/Navbar'
import { theme } from './theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Grid container>
        <Grid item xs={12} sm={3}>
          <form>
            <Select fullWidth>
              <MenuItem value=''>
                <em>Selecione uma rota</em>
              </MenuItem>

              <MenuItem value=''>Rota 1</MenuItem>

              <MenuItem value=''>Rota 2</MenuItem>

              <MenuItem value=''>Rota 3</MenuItem>
            </Select>

            <div style={{ textAlign: 'center', margin: theme.spacing(1) }}>
              <Button type='submit' variant='contained'>
                Iniciar Rota
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={9}></Grid>
      </Grid>

      <h1>ReactJS e TypeScript. 😃</h1>
    </ThemeProvider>
  )
}
