import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const MenPage = () => {
  const {isLoading,products} = useProducts('/search/men');
  // console.log(products);
  
  return (
    
    <ShopLayout title='Teslo-Shop | Hombres' pageDescription='Categoria Hombres' >
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

export default MenPage