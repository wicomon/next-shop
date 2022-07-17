import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UIContext } from '../../context';


export const NavBar = () => {
  const {asPath} = useRouter();
  const uiContext = useContext(UIContext);
	const { toggleSideMenu } = uiContext;
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref >
          <Link display='flex' alignItems='center' underline='none' >
            <Typography variant='h6'>Teslo |</Typography>
            <Typography  sx={{ml: 0.5}} >Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: {xs: 'none', sm:'block'} }} >
          <NextLink href='/category/men' passHref >
            <Link underline='none'>
              <Button color={asPath=='/category/men' ? 'success' : 'warning'} >Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref >
            <Link underline='none'>
              <Button color={asPath=='/category/women' ? 'success' : 'warning'}>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kid' passHref >
            <Link underline='none'>
              <Button color={asPath=='/category/kid' ? 'success' : 'warning'}>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href='/cart' passHref >
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary" >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>

          </Link>
        </NextLink>

        <Button onClick={() => toggleSideMenu() }>
          Menú
        </Button>


      </Toolbar>
    </AppBar>
  )
}
