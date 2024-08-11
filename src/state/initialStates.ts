import { ClientDTO } from "../data/DTOs/ClientDTO";
import { InventoryDTO } from "../data/DTOs/InventoryDTO";
import { LaboratoryDTO } from "../data/DTOs/LaboratoryDTO";
import { ProviderDTO } from "../data/DTOs/ProviderDTO";
import { Product } from "../data/Entities/Product";
import { Sales } from "../data/Entities/Sales";
import { User } from "../data/Entities/User";
import { UserState } from "../data/Entities/UserLogin";
import { baseStorage } from "../services/baseStorage";
const { GetData } = baseStorage();

export const initialUser: UserState =
  GetData("user-inventory-app") ||
  ({
    Name: "",
    Role: "",
    Token: "",
    IsLogged: false,
  } as UserState);
export const initialSales: Sales = {
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
}
export const initialAppUser: User = {
  id: 0,
  identificacion: "",
  nombres: "",
  apellidos: "",
  correo: "",
  username: "",
  contraseña: "",
  rol: "",
  intentosFallidos: 0,
};

export const initialAppProduct: Product = {
  id: 0,
  Nombre: "",
  Descripcion: "",
  IdLaboratorio: 0,
  LaboratorioName: "",
  Stock: 0,
  PrecioCompra: 0.0,
  PrecioVenta: 0.0,
};

export const initialAppLaboratory: LaboratoryDTO = {
  id: 0,
  Identificacion: "",
  NombreCompleto: "",
  RazonSocial: "",
  Telefono: "",
  Direccion: "",
  Correo: "",
};

export const initialAppInventory: InventoryDTO = {
  id: 0,
  idProducto: 0,
  producto: "",
  tipoMovimiento: "",
  stockProducto: 0,
  cantidadMovimiento: 0,
};

export const initialAppClient: ClientDTO = {
  id: 0,
  Identificacion: "",
  NombreCompleto: "",
  RazonSocial: "",
  Telefono: "",
  Direccion: "",
  Correo: "",
};

export const initialAppProvider: ProviderDTO = {
  id: 0,
  Nombre: "",
  Telefono: "",
  Direccion: "",
};
