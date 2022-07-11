import { ShopLayout } from "../../components/layouts";
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, esES } from "@mui/x-data-grid";
import NextLink from 'next/link';

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 100},
  {field: 'fullName', headerName: 'Nombre', width: 200},
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Muestra informacion si esta pagada o no',
    width: 200,
    align: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return (
        params.row.paid 
          ? <Chip color="success" label='Pagada' variant='outlined' />
          : <Chip color="error" label='No Pagada' variant='outlined' />
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Orden',
    width: 200,
    align: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref><Link>Ver Orden</Link></NextLink>
      )
    }
  }
];

const rows = [
  {id: 1, fullName: 'Williams Cordova', paid: true},
  {id: 2, fullName: 'Luis Doe', paid: false},
  {id: 3, fullName: 'Gabriela Doe', paid: true},
  {id: 4, fullName: 'Franz Doe', paid: false},
  {id: 5, fullName: 'Ana Doe', paid: true},
  {id: 6, fullName: 'Natalia Doe', paid: false},
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription="Historial de ordenes del cliente" >
      <Typography variant="h1" component='h1' >Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{height: 650, width:'100%'}}>
          <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection={false}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage