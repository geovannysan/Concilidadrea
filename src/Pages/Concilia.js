import { useState } from "react";
import { ListaReporte, ListaTransaciones } from "../utils/Files/indes";

export default function ConciliaView() {
    let [datos,setDatos]= useState([])
    let [fecha,setFech]= useState({
        inid:"",
        find:""
    })

    function Consulta(e) {
        e.preventDefault();
        let ini = document.getElementById("inic").value;
        let fin = document.getElementById("fin").value;
        console.log(ini, fin)
        ListaReporte(ini, fin).then(salida => {
            if (salida.mesaje){
                salida.response.map(f=>{
                    console.log(f.codigo_encontrado)
                    if (f.codigo_encontrado == "SI"){
                       
                        document.getElementById("" + f.name + "SI").innerText = f.total_compras;
                        document.getElementById("" + f.name + "SITO").innerText = f.total;
                    }
                    if (f.codigo_encontrado == "NO") {

                       // document.getElementById("" + f.name + "SI").innerText = f.total_compras;
                        document.getElementById("" + f.name + "SITO").innerText = f.total_compras;
                    }
                })
                setFech({
                    inid:ini,
                    find:fin
                })
                console.log(salida.response)
            }
          //  console.log(salida.response)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            <div className="container mb-3 mt-3">
                <div className="col-10 col-md-11 col-lg-5 mx-auto mx-md-0">
                    <img src="img/speed_logo.png" className="img-fluid text-center" alt="" />
                </div>
            </div>
            <div className=" container">

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
            <div className="container " id="titulo01">
                <h1 className="fw-bold">Reporte Conciliación</h1>
            </div>
            <div className="container my-5" id="computecnics-report">
                <div className="container border-bottom border-2">
                    <h4><span><b>Computecnicsnet</b></span></h4>
                </div>
                <div className="container mt-3" id="botones-estados">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-left my-3">
                            <p className="fw-bold text-center border border-warning mb-0 bg-pichincha py-1">Bnco. Pichincha</p>
                            <div className="container border border-warning">
                                <p id="2100106995SI" className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="2100106995SITO"className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 text-left my-3">
                            <p className="fw-bold text-center border border-info mb-0 bg-pacifico py-1 text-white">Bnco. Pacifico</p>
                            <div className="container border border-info">
                                <p id="8069530SI" className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="8069530SITO" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-left my-3">
                            <p className="fw-bold  text-center border border-dark mb-0 bg-produbanco py-1 text-white">Bnco. Produbanco</p>
                            <div className="container border border-dark">
                                <p id="1058194005SI" className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end">
                                        <h4 id="1058194005SITO" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className="col-md-6 col-lg-3 text-left my-3">
                            <p className="fw-bold  text-center border border-danger mb-0 bg-guayaquil py-1 text-white">Bnco. Guayaquil</p>
                            <div className="container border border-danger">
                                <p id="18018624SI" className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="18018624SITO" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <div className="container my-5" id="carlostapia-report">
                <div className="container border-bottom border-2">
                    <h4><span><b>Carlos Tapia</b></span></h4>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold text-center border border-warning mb-0 bg-pichincha py-1">Bnco. Pichincha</p>
                            <div className="container border border-warning">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold text-center border border-info mb-0 bg-pacifico py-1 text-white">Bnco. Pacifico</p>
                            <div className="container border border-info">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold  text-center border border-dark mb-0 bg-produbanco py-1 text-white">Bnco. Produbanco</p>
                            <div className="container border border-dark">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-left my-2 d-none">
                            <p className="fw-bold  text-center border border-danger mb-0 bg-guayaquil py-1 text-white">Bnco. Guayaquil</p>
                            <div className="container border border-danger">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "1.8px" }}>$1420.00</p>
                            </div>
                            <div className="container border border-2 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end ">
                                        <h4 className="pt-2 text-center">$1420.00</h4>
                                    </div>
                                    <div className="col-3 pt-2">
                                        <a href="" style={{ fontSize: "25px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5" id="totales-report">
                <div className="container border-bottom border-2">
                    <h4><span><b>Reporte General</b></span></h4>
                </div>
                <div className="container mt-3" id="botones-estados">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold text-center border border-warning mb-0 bg-pichincha py-1">Bnco. Pichincha</p>
                            <div className="container border border-warning ">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$0.00</p>
                            </div>
                            <div className="container border border-success border-1 mt-1">
                                <div className="row">
                                    <div className="col-9 border-end border-success ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container border border-danger border-1 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end border-danger ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$0.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold text-center border border-info mb-0 bg-pacifico py-1 text-white">Bnco. Pacifico</p>
                            <div className="container border border-info">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border-success border-1 mt-1">
                                <div className="row">
                                    <div className="col-9 border-end border-success ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container border border-danger border-1 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end border-danger ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold  text-center border border-dark mb-0 bg-produbanco py-1 text-white">Bnco. Produbanco</p>
                            <div className="container border border-dark">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border-success border-1 mt-1">
                                <div className="row">
                                    <div className="col-9 border-end border-success ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container border border-danger border-1 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end border-danger ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <p className="fw-bold  text-center border border-danger mb-0 bg-guayaquil py-1 text-white">Bnco. Guayaquil</p>
                            <div className="container border border-danger">
                                <p className="py-2 pt-3 text-center fw-bold" style={{ fontSize: "18px" }}>$00.00</p>
                            </div>
                            <div className="container border border-success border-1 mt-1">
                                <div className="row">
                                    <div className="col-9 border-end border-success ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container border border-danger border-1 mt-1 shadow">
                                <div className="row">
                                    <div className="col-9 border-end border-danger ">
                                        <h4 className="pt-2 text-center" style={{ fontSize: "18px" }}>$00.00</h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className="container mb-5">
                <div className="row justify-content-end">
                    <div className="col-3">
                        <div className=" container btn btn-primary">
                            <a href="/files" className="text-white fw-bold" style={{ textDecoration: "none" }}>Nuevo</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>




    )

}





