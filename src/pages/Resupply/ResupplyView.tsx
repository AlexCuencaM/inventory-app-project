import { Typography } from "@mui/material"
import { ResupplyDetails } from "./components/ResupplyDetails"
import { ResupplyTableView } from "./components/ResupplyTableView"
import { useSales } from "../../hooks/useSales"
import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"
import { SalesDTO } from "../../data/DTOs/SalesDTO"
import { Sales } from "../../data/Entities/Sales"
const defaultCompraDetalle: SalesDTO[] = [
    {
        id: 0,
        fechaVenta: new Date(),
        idCliente: 0,
        cliente: "",
        idUsuario: 0,
        subtotal: 0,
        ivaPor: 0,
        iva: 0,
        total: 0,
        ventaDetalles: []
    },
  ];
  
  const defaultCompra: Sales = {
      id: 0,
      fechaVenta: new Date(),
      idCliente: 0,
      cliente: "",
      idUsuario: 0,
      subtotal: 0,
      ivaPor: 0,
      iva: 0,
      total: 0,
      ventaDetalles: []
  };
export const ResupplyView = () => {
  const { getAllAsync } = useSales();
  const { setStateForm } = useForm(defaultCompra);
  useEffect(() => {
    getAllAsync().then();
  }, [])
  
  return (
    <>
        <Typography variant="h1">
            Reabastecimiento
        </Typography>
        <ResupplyTableView setStateForm={setStateForm}/>
        <ResupplyDetails/>
    </>

  )
}
