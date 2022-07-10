import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/';
import { initialData } from '../database/products';
import { ProductList } from '../components/products/ProductList';

const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo-Shop Home' pageDescription='Encuentra los mejores productos de Teslo Aqui' >
      <Typography variant='h1'> Tienda </Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }} > Todos los productos </Typography>

      <ProductList products={initialData.products} />


    </ShopLayout>
  )
}

export default Home
