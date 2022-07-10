import NextLink from 'next/link';
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Typography, Box, Link } from "@mui/material";
import { ShopLayout } from "../../components/layouts";


const EmptyCartPage = () => {
  return (
    <ShopLayout title='Carrito Vacío' pageDescription="No hay articulos en el carrito de compras" >
      <Box display={'flex'} flexDirection={{xs:'column', sm: 'column', md:'row'}} justifyContent='center' alignItems='center' height='calc(100vh - 200px)' >
        <RemoveShoppingCartOutlined sx={{fontSize: 100}} />
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography variant='h4' > Su Carrito está Vacio </Typography>
          <NextLink href='/' passHref>
            <Link typography='h4' color='secondary' underline='none'  >
              Regresar
            </Link>
          </NextLink>
        </Box>

      </Box>
    </ShopLayout>
  )
}

export default EmptyCartPage;