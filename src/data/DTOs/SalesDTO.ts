export type SalesDTO = {
    id:number,
    fechaVenta:Date,
    idCliente:number,
    cliente: string,
    idUsuario:number,
    subtotal:number,
    ivaPor:number,
    iva:number,
    total:number,
    ventaDetalles: SalesDetailDTO[],
}

export type SalesDetailDTO = {
     id:number,
     idVenta:number,
     idProducto:number,
     producto:string,
     cantidad:number,
     precioUnitario:number,
     precioTotal:number,
}