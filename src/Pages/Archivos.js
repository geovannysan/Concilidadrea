import { useEffect, useState } from "react"

export default function ArchivosViews() {
    let [pichincha, setPichincha] = useState([]);
    let [pacifico, setPacifico] = useState([]);
    let [produbanco, setProdubanco] = useState([]);
    let [guayaquil, setGuayaquil] = useState([]);
    let [fileslist, setFiles] = useState({
        "file-pichincha": "",
        "file-pacifico": "",
        "file-produbanco": "",
        "file-guayaquil": "",
    })
    let list={
        "file-pichincha": "pichincha",
        "file-pacifico": "pacifico",
        "file-produbanco": "produbanco",
        "file-guayaquil": "guayaquil",
    }
    let [lista, setLsita] = useState([]);
    function onchange(e) {
        console.log(e.files)
        var input = e.files[0];
        if (input == undefined) {
            setFiles({
                ...fileslist,
                [e.id]:""
            })            
            document.getElementById("" +list[e.id]).innerText = ""
            return;
        }
        setFiles({
            ...fileslist,
            [e.id]: e.files
        })
        let nombre = input.name.split(" ")[0]
        console.log(e.id, input,nombre)
        document.getElementById("" + list[e.id]).innerText = nombre
       
        return;
    }
    /*let imageUpload = document.getElementById("file-pichincha");
    let pacificofile = document.getElementById("file-pacifico");
    let produbancofile = document.getElementById("file-produbanco");
    let guayaquilfile = document.getElementById("file-guayaquil");*/


    return (
        <>
            <div className="col-8 col-md-6 mx-auto">
                <div className="container mb-3 mt-3">
                    <div className="col-10 col-md-9 col-lg-5 mx-auto mx-md-0">
                        <img src="img/speed_logo.png" className="img-fluid text-center" alt="" />
                    </div>
                </div>
                <div className="container" id="titulo01">
                    <h1 className="fw-bold ">Conciliación Bancaria</h1>
                </div>
                <div className="container my-5" id="computecnics">
                    <div className="container border-bottom border-2">
                        <h4><b>Computecnicsnet</b> <span className="text-muted">- Estados de Cuenta</span></h4>
                    </div>
                    <div className="container mt-3" id="botones-estados">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pichincha py-3">
                                    <label for="file-pichincha" className="text-dark fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Pichincha</label>
                                    <input id="file-pichincha" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="pichincha" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pacifico py-3">
                                    <label for="file-Pacifico" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Pacifico</label>
                                    <input id="file-Pacifico" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="pacifico" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-produbanco py-3">
                                    <label for="file-Produbanco" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Produbancos</label>
                                    <input id="file-Produbanco" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="produbanco" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-guayaquil py-3">
                                    <label for="file-Guayaquil" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Guayaquil</label>
                                    <input id="file-Guayaquil" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="guayaquil" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        <a href="" style={{ fontSize: "20px" }}><span className="icon-file-pdf text-danger"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container my-5" id="carlostapia">
                    <div className="container border-bottom border-2">
                        <h4><b>Carlos Tapia</b> <span className="text-muted">- Estados de Cuenta</span></h4>
                    </div>
                    <div className="container mt-3" id="botones-estados">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pichincha py-3">
                                    <a href="" className="text-dark fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Pichincha</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pacifico py-3">
                                    <a href="" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Pacifico</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-produbanco py-3">
                                    <a href="" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Produbanco</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container my-5" id="transacciones">
                    <div className="container border-bottom border-2">
                        <h4><b>Transacciones</b> <span className="text-muted">- Cobros Portal</span></h4>
                    </div>
                    <div className="container my-3">
                        <div className="col-md-6 col-lg-3 text-left my-2">
                            <div className="container btn btn-spead py-3">
                                <label for="inputGroupFile02" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>Transaciones</label>
                                <input type="file" className="form-control" id="inputGroupFile02" />
                            </div>
                        </div>
                        <div className="input-group mb-3">

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-8 col-md-6 col-lg-3">
                            <div className=" container btn btn-primary">
                                <a href="/concilia" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>CONCILIAR</a>
                            </div>
                        </div>
                        <div className="col-2 col-md-2 col-lg-2">
                            <div className=" container btn btn-danger">
                                <a href="" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>Borrar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}