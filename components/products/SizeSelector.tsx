import { Box, Button } from "@mui/material";
import { FC } from "react";
import { Isize } from "../../interfaces";

interface Props{
  selectedSize?: Isize;
  sizes: Isize[];
}

export const SizeSelector:FC<Props> = ({sizes, selectedSize}) => {
  return (
    <Box>
      {
        sizes.map(size => {
          return (
              <Button key={size} size='small' color={selectedSize === size ? 'secondary' : 'primary'} variant='outlined' >{size}</Button>
          )
        }
        )

      }
    </Box>
  )
}
