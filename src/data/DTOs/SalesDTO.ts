export type SalesDTO = {
    id:number,
    FechaVenta:Date,
    IdCliente:number,
    IdUsuario:number,
    Subtotal:number,
    IvaPor:number,
    Iva:number,
    Total:number,
    VentaDetalles: SalesDetailDTO[],
}

export type SalesDetailDTO = {
     id:number,
     IdVenta:number,
     IdProducto:number,
     Producto:string,
     Cantidad:number,
     PrecioUnitario:number,
     PrecioTotal:number,
}