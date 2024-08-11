import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useDialog } from "../../../hooks/useDialog"
import { SimpleDialog } from "../../../ui/Dialog/SimpleDialog"
import { useSales } from "../../../hooks/useSales"

export const ResupplyDetails = () => {
  const { sale } = useSales()
  const { openDetailDialog, handleCloseDetailDialog} = useDialog()
  return (
    <SimpleDialog title={"Detalles de la venta"}  openDialog={openDetailDialog} handleDialog={handleCloseDetailDialog}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    
                    <TableCell align="right">id</TableCell>
                    <TableCell align="right">producto</TableCell>
                    <TableCell align="right">cantidad</TableCell>
                    <TableCell align="right">precioUnitario</TableCell>
                    <TableCell align="right">precioTotal</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {sale.ventaDetalles.map((row) => (
                    <TableRow
                    key={row.producto + row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="right">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.producto}</TableCell>
                    <TableCell align="right">{row.cantidad}</TableCell>
                    <TableCell align="right">{row.precioUnitario}</TableCell>
                    <TableCell align="right">{row.precioTotal}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </SimpleDialog>
  )
}
