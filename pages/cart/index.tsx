import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { CartList } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"


const CartPage = () => {
  return (
    <ShopLayout pageDescription="Carrito de compras de la tienda" title="Carrito - 3" >
      <Typography variant='h1' component='h1' >Carrito</Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" > Orden </Typography>
              <Divider />
              {/* Order summary */}
              <Box sx={{mt:3}}>
                <Button color='info' className="circular-btn" fullWidth >
                  CheckOut
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage