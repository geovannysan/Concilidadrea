import moment from "moment";
//import 'moment-timezone'
//import 'moment/locale/es';
//require('moment/locale/es.js')
export const columns = [
  
    {
        accessorKey: 'cliente',
        header: 'Cliente',

    },
    {
        accessorKey: 'cedula',
        header: 'Cédula',
        size: 19
    },
    {
        accessorKey: 'idtranse',
        header: 'Idtranse',
        size: 15
    },
    {
        accessorKey:'transacciones',
        header:"#Transacciones",
       
    },
    {
        accessorKey: 'legal',
        header: 'Legal',
        size: 15
    },
    {
        accessorKey: 'factura',
        header: 'Factura',
        size:15
    }
    ,
    {
        accessorKey: 'fecha',
        header: 'Fecha',
        size:25
    }
    ,
    {
        accessorKey: 'forma_pago',
        header: 'Forma de pago',
    },
    {
        accessorKey:'cobrado',
        header:"Cobrado",
        size:25
    }
];