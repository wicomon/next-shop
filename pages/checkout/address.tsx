import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';

const AdressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino' >
      <Typography variant='h1' component='h1' sx={{mb:3}} >Dirección</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label='Nombre' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellido' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección 2' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Código Postal' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            {/* <InputLabel >País</InputLabel> */}
            <Select
              variant='filled'
              label='País'
              value={1}
              fullWidth
            >
              <MenuItem value={1}>Perú</MenuItem>
              <MenuItem value={2}>Brasil</MenuItem>
              <MenuItem value={3}>Chile</MenuItem>
              <MenuItem value={4}>Uruguay</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Teléfono' variant='filled' fullWidth />
        </Grid>

      </Grid>

      <Box sx={{mt:5}} display='flex' justifyContent='center'  alignItems='center'>
        <Button color='info' className='circular-btn' size='large' >
          Revisar Pedido
        </Button>
      </Box>

    </ShopLayout>
  )
}

export default AdressPage