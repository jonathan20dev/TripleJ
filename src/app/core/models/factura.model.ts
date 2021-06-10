export interface Factura {
    id: number;
    tipo: string;
    montoBruto: number;
    montoImpuesto: number;
    montoDescuento: number;
    montoNeto: number;
    notas: string;
    fecha: string;
    codigoActividad: number;
    codigoSucursal: number;
    codigoCliente: string;
    moneda:string;
}