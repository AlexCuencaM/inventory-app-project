export type Sales = {
    id:number,
    FechaVenta:Date,
    IdCliente:number,
    IdUsuario:number,
    Subtotal:number,
    IvaPor:number,
    Iva:number,
    Total:number,
    VentaDetalles: SalesDetail[],
}

export type SalesDetail = {
     id:number,
     IdVenta:number,
     IdProducto:number,
     Producto:string,
     Cantidad:number,
     PrecioUnitario:number,
     PrecioTotal:number,
}