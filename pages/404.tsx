import { ShopLayout } from '../components/layouts/ShopLayout';
import { Box, Typography } from '@mui/material';

const Custom404Page = () => {
  return (
    <ShopLayout title='Page not Found' pageDescription='page not found' >
      <Box display={'flex'} flexDirection={{xs:'column', sm: 'column', md:'row'}} justifyContent='center' alignItems='center' height='calc(100vh - 200px)' >
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200} >
          404 |
        </Typography>
        <Typography marginLeft={2} >
          No encontamos ninguna página aquí
        </Typography>

      </Box>
    </ShopLayout>
  )
}

export default Custom404Page