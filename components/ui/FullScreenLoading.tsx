import { Box, CircularProgress } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display={"flex"}
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      {/* <Typography sx={{mb: 3}} >Cargando ...</Typography> */}
      <CircularProgress thickness={1} size={200} />
    </Box>
  );
};
