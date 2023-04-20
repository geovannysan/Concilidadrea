import { useEffect, useState } from "react"
import TablasViews from "../Component/Tablas/TablasView";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import moment from "moment/moment";
import { ListaTransaciones } from "../utils/Files/indes";
import { columns } from "../utils/Columnas";
import ExportToExcel from "../Component/ButtonExpor";
export default function SinciliarView() {
    let [datos, setDatos] = useState([])
    let [spiner, setSpinser] = useState(true)
    const ShowFoder = () => {
        try {
            return datos.map((item, index) => {

                return (
                    <tr key={index}>
                        <td className="text-xs text-center">{item.id}</td>
                        <td className="text-xs text-center">{item.cliente}</td>
                        <td className="text-xs text-center">{item.cedula}</td>
                        <td className="text-xs text-center ">{item.idtranse}</td>
                        <td className="text-xs text-center ">{item.factura}</td>
                        <td className="text-xs text-center ">{item.legal}</td>
                        <td className="text-xs text-center ">{item.transacciones}</td>
                        <td className="text-xs text-center ">{item.forma_pago}</td>
                        <td className="text-xs text-center ">{item.operador}</td>
                        <td className="text-xs text-center ">{item.comision}</td>
                        <td className="text-xs text-center ">{item.neto}</td>
                        <td className="text-xs text-center">{moment(item.fecha).format('L')}</td>
                        <td className="text-xs text-center ">{item.cobrado}</td>
                        <td className="text-center ">
                            <div className=" btn-group  " >
                                {/*<Tooltip className="" title="Ver Compra" placement="top">
                                    <a
                                        className="btn btn-default-su btn-sm text-danger"
                                        href={item.link_external}
                                        target="_blank"
                                    >
                                        <i className="fa fa-print"></i>
                                    </a>
                                 </Tooltip>*/}
                            </div>

                        </td>

                    </tr>
                )
            });
        } catch (error) { }
    }
    const theads = () => {
        return (
            <thead className="">

                <tr className="border ">
                    <th  >#</th>
                    <th  >Cliente</th>
                    <th className="text-xs text-center ">Cédula</th>
                    <th className="text-xs text-center"  >IDTransacion</th>
                    <th className="text-xs text-center"  >Factura</th>
                    <th className="text-xs text-center">Legal</th>
                    <th className="text-xs text-center ">#Transación</th>
                    <th className="text-xs text-center ">Forma de Pago</th>
                    <th className="text-xs text-center ">Operador</th>
                    <th className="text-xs text-center ">Comisión</th>
                    <th className="text-xs text-center ">Neto</th>
                    <th className="text-xs text-center ">Fecha</th>
                    <th className="text-xs text-center ">Cobrado</th>
                    <th className="text-center"> Aciones</th>
                </tr>
            </thead>
        )
    }
 
    function CargarListaTransacione() {
        ListaTransaciones().then(salida => {
            if (salida.mensaje) {
                setDatos([...salida.lista])
                console.log(salida)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    function Consulta(e) {
        e.preventDefault();
        let ini = document.getElementById("inic").value;
        let fin = document.getElementById("fin").value;
        console.log(ini, fin)
        ListaTransaciones(ini, fin).then(salida => {
            console.log(salida)
            if (salida.mensaje && salida.lista.length > 0) {
                let nuevos = salida.lista.map(e => {
                    e.fecha = moment(e.fecha).format("YYYY-MM-DD")
                    return { ...e }
                })
                // Display an info toast with no title
              
                setDatos(nuevos)
                /*  setFech({
                      inid: ini,
                      find: fin
                  })*/
            }
            console.log(salida)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="">
            <div className="container mb-3 mt-3">
                <div className="col-10 col-md-11 col-lg-5 mx-auto mx-md-0">
                    <img src="img/speed_logo.png" className="img-fluid text-center" alt="" />
                </div>
            </div>
            <div className=" container mb-3">

                <div className=" row">
                    <div className="col-12 col-md-4 col-lg-4 mb-2">
                        <div className=" input-group">
                            <input id="inic" className=" form-control" type="date" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-2">
                        <div className=" input-group">
                            <input id="fin" className=" form-control " type="date" />
                        </div>
                    </div>
                    <div className=" col-sm mb-sm-2">
                        <div>
                            <button className="  btn-primary btn" onClick={(e) => Consulta(e)}> Consultar </button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container">
                <MaterialReactTable
                    columns={columns}
                    data={datos}
                    renderTopToolbarCustomActions={({ table }) => (
                        <>
                     { datos.length==0?"":  <ExportToExcel
                        apiData={datos}
                        fileName={"Sin Consolidar"}
                        label={""}
                        />}
                        </>
                    )}
                    enableRowActions
                    renderRowActions={({row})=>(
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-sm btn-default">A1</button>
                            <button type="button" className="btn btn-sm  btn-default">A2</button>
                            <button type="button" className="btn btn-sm  btn-default">A3</button>
                        </div>
                        
                    )}
                    localization={MRT_Localization_ES}
                />
            </div>
            <div className=" container pt-5">
                <div className=" fixed-bottom ">
                    <a href="/" className="btn btn-danger float-end m-1 text-white"> <i className="icon-level-up"></i></a>
                </div>

            </div>
        
        </div>
    )
}