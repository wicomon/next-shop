import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/';
import { ProductList } from '../components/products/ProductList';
import { useProducts } from '../hooks';
import { FullScreenLoading } from '../components/ui';


const Home: NextPage = () => {

  const {isLoading,products} = useProducts('/products');
  // console.log(products);
  
  return (
    
    <ShopLayout title='Teslo-Shop Home' pageDescription='Encuentra los mejores productos de Teslo Aqui' >
      <Typography variant='h1'> Tienda </Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }} > Todos los productos </Typography>
      {
        isLoading ? <FullScreenLoading />
        : <ProductList products={products} />
        // : <FullScreenLoading />
      }


    </ShopLayout>
  )
}

export default Home
