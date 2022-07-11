import NextLink from "next/link";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSumary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

const CartPage = () => {
  return (
    <ShopLayout
      title="Resumen de la Orden 121"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Chip
        sx={{my:2}}
        label="Pendiente de pago"
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      />
      {/* <Chip
        sx={{my:2}}
        label="La orden ya fue pagada"
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      /> */}
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2"> Resumen (3 Productos) </Typography>
              <Divider sx={{ mt: 1 }} />

              <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">
                Dirección de Entrega :
              </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link>Editar</Link>
                </NextLink>
              </Box>
              
              <Typography>Williams Cordova</Typography>
              <Typography>323 Algun Lugar</Typography>
              <Typography>Stitsvile, asd 312</Typography>
              <Typography>Perú</Typography>
              <Typography>+52 946584241</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">
                Informacion de pago :
              </Typography>
                <NextLink href="/cart" passHref>
                  <Link>Editar</Link>
                </NextLink>
              </Box>

              <OrderSumary />

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{my:2}}
                  label="La orden ya fue pagada"
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
