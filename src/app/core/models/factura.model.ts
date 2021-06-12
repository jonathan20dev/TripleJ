export interface Factura {
    numero: number;
    tipo: string;
    cliente: string;
    moneda: string;
    montoBruto: number;
    montoDescuento: number;
    montoImpuesto: number;
    montoNeto: number;
    notas: string;
    actividad:string;
    fecha: string;
    sucursal: string;
}