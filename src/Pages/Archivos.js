import { useEffect, useState } from "react"
import { filesGuayaquil, filesPacifico, filesPichincha, filesProdubanco, filesTransacio } from "../utils/Files/indes";
import { SnackbarAction, useSnackbar, SnackbarProvider } from "notistack";
import $ from 'jquery'
import { useDispatch } from "react-redux";
import { addmesaje } from "../StoreRedux/Slice/mensajeSlice";


export default function ArchivosViews() {
    let usedispacth = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    let [uno, setSpineruno] = useState(true);
    let [dos, setSpinerdos] = useState(true);
    let [tres, setSpinertres] = useState(true);
    let [cuatro, setSpinercuatro] = useState(true);
    let [cinco, setCinco] = useState(true);
    let [fileslist, setFiles] = useState({
        "file-pichincha": "",
        "file-pacifico": "",
        "file-produbanco": "",
        "file-guayaquil": "",
        "lista": ""
    })
    function CargarPichincha() {

        console.log("aqui")
        if (fileslist["file-pichincha"][0] == undefined) { return }
        var input = fileslist["file-pichincha"][0].name;
        let nombre = input.split(".")[0]
        console.log(fileslist["file-pichincha"][0], nombre)
        if (nombre != "2100106995") {
            enqueueSnackbar("El archivo tiene un nombre diferente al permitido como 2100106995", {
                variant: 'warning',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            return;
        }
        
        console.log(fileslist["file-pichincha"],nombre)
        setSpineruno(false)
        filesPichincha(fileslist["file-pichincha"], nombre).then(oup => {
            console.log(oup)
            if (oup.myObjects.length > 0) {
                 setSpineruno(true)
                 usedispacth(addmesaje({
                     colorhead: "#32a852",
                     titel: "Se registaron " + oup.num ,
                     body:  "De un total de " + oup.myObjects.length + " filas del archivo " + nombre,
                     icon: "",
                 }))
                 enqueueSnackbar("Registro exitoso", {
                     variant: "reportComplete", anchorOrigin: {
                         vertical: 'top',
                         horizontal: 'right'
                     }
                 }
                 )
                 
                 document.getElementById('file-pichincha').value = null;
                 document.getElementById("pichincha").innerText = ""
             }
        }).catch(err => {
            setSpineruno(true)
            console.log(err)
            enqueueSnackbar("Hubo un error ", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        })
    }
    function CargarProdubanco() {
        if (fileslist["file-produbanco"][0] == undefined) { return }
        var input = fileslist["file-produbanco"][0].name;
        let nombre = input.split(".")[0]
        console.log(fileslist["file-produbanco"][0], nombre)
        if (nombre != "1058194005") {
            enqueueSnackbar("El archivo tiene un nombre diferente al permitido", {
                variant: 'warning',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            return;
        }
        setSpinertres(false)
        filesProdubanco(fileslist["file-produbanco"], nombre).then(oup => {
            setSpinertres(true)
            console.log(oup)
            if (oup.myObjects.length > 0) {
                console.log(oup)
                enqueueSnackbar("Se registaron " + oup.num + " de un total de " + oup.myObjects.length + " filas del archivo " + nombre, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }
            document.getElementById("file-produbanco").value = ""
            document.getElementById("produbanco").innerText = ""
            setFiles({
                ...fileslist,
                "file-produbanco": ""
            })
        }).catch(err => {
            setSpinertres(true)
            console.log(console.log(err))
        })
    }
    function CargarPacifico() {
        // console.log(fileslist["file-pacifico"],fileslist)
        if (fileslist["file-pacifico"][0] == undefined) { return }
        var input = fileslist["file-pacifico"][0].name;
        let nombre = input.split(".")[0]
        console.log(fileslist["file-pacifico"][0], nombre)
        if (nombre != "8069530") {
            enqueueSnackbar("El archivo tiene un nombre diferente al permitido", {
                variant: 'warning',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            return;
        }
        setSpinerdos(false)
        filesPacifico(fileslist["file-pacifico"], nombre).then(oup => {
            setSpineruno(true)
            if (oup.myObjects.length > 0) {
                setSpinercuatro(true)
                console.log(oup)
                enqueueSnackbar("Se registaron " + oup.num + " de un total de " + oup.myObjects.length + " filas del archivo " + nombre, {
                    variant: 'success',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' }
                })
            }
            document.getElementById("file-pacifico").value = ""
            document.getElementById("pacifico").innerText = ""
            setFiles({
                ...fileslist,
                "file-pacifico": ""
            })

            console.log(oup)
        }).catch(err => {
            setSpinerdos(true)

            console.log(console.log(err))
        })
    }
    function CargarGuayaquil() {
        //console
        if (fileslist["file-guayaquil"][0] == undefined) { return }
        var input = fileslist["file-guayaquil"][0].name;
        let nombre = input.split(".")[0]
        console.log(fileslist["file-guayaquil"][0], nombre)
        if (nombre != "18018624") {
            enqueueSnackbar("El archivo tiene un nombre diferente al permitido", {
                variant: 'warning',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            return;
        }
        setSpineruno(false)
        filesGuayaquil(fileslist["file-guayaquil"], nombre).then(oup => {
            if (oup.myObjects.length > 0) {
                setSpinercuatro(true)
                console.log(oup)
                enqueueSnackbar("Se registaron " + oup.num + " de un total de " + oup.myObjects.length + " filas del archivo " + nombre, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }
            document.getElementById("file-guayaquil").value = ""
            document.getElementById("guayaquil").innerText = ""
            setFiles({
                ...fileslist,
                "file-guayaquil": ""
            })
        }).catch(err => {
            setSpinercuatro(true)
            console.log(console.log(err))
        })
    }
    function CargarTansaciones() {
        if (fileslist["lista"][0] == undefined) { return }
        var input = fileslist["lista"][0].name;
        let nombre = input.split(".")[0]
        console.log(fileslist["lista"][0], nombre)
        setCinco(false)
        filesTransacio(fileslist["lista"], nombre).then(oup => {
            setCinco(true)
            if (oup.myObjects.length > 0) {
                setCinco(true)
                console.log(oup)
                enqueueSnackbar("Se registaron " + oup.num + " de un total de " + oup.myObjects.length + " filas del archivo " + nombre, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
                document.getElementById("lista").value = ""
                document.getElementById("transacion").innerText = ""
                setFiles({
                    ...fileslist,
                    "lista": ""
                })
            }
            console.log(oup)
        }).catch(err => {
            setCinco(true)
            console.log(console.log(err))
        })
    }
    function onchange(e) {
        console.log(e.files)
        var input = e.files[0];
        if (input == undefined) {
            setFiles({
                ...fileslist,
                [e.id]: ""
            })
            if (e.id == "file-pichincha") document.getElementById("pichincha").innerText = ""
            if (e.id == "file-pacifico") document.getElementById("pacifico").innerText = ""
            if (e.id == "file-produbanco") document.getElementById("produbanco").innerText = ""
            if (e.id == "file-guayaquil") document.getElementById("guayaquil").innerText = ""
            if (e.id == "lista") document.getElementById("transacion").innerText = ""
            return;
        }
        setFiles({
            ...fileslist,
            [e.id]: e.files
        })
        let nombre = input.name.split(" ")[0]
        if (e.id == "file-pichincha") document.getElementById("pichincha").innerText = nombre
        if (e.id == "file-pacifico") document.getElementById("pacifico").innerText = nombre
        if (e.id == "file-produbanco") document.getElementById("produbanco").innerText = nombre
        if (e.id == "file-guayaquil") document.getElementById("guayaquil").innerText = nombre
        if (e.id == "lista") document.getElementById("transacion").innerHTML = nombre
        return;
    }
    //  enqueueSnackbar("You're report is ready", { variant: "reportComplete" })
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
                                        {uno ? <a style={{ fontSize: "20px" }} onClick={CargarPichincha} ><span className="icon-level-up text-danger"></span></a>
                                            : <span style={{ fontSize: "20px" }} className=" spinner-grow spinner-grow-sm text-danger"></span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pacifico py-3">
                                    <label for="file-pacifico" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Pacifico</label>
                                    <input id="file-pacifico" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="pacifico" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        {dos ? <a style={{ fontSize: "20px" }} onClick={CargarPacifico} ><span className="icon-level-up text-danger"></span></a>
                                            : <span style={{ fontSize: "20px" }} className=" spinner-grow spinner-grow-sm text-danger"></span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-produbanco py-3">
                                    <label for="file-produbanco" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Produbancos</label>
                                    <input id="file-produbanco" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="produbanco" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        {tres ? <a style={{ fontSize: "20px" }} onClick={CargarProdubanco}><span className="icon-level-up text-danger"></span></a>
                                            : <span style={{ fontSize: "20px" }} className=" spinner-grow spinner-grow-sm text-danger"></span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-guayaquil py-3">
                                    <label for="file-guayaquil" className="text-white fw-bold" style={{
                                        textDecoration: "none"
                                    }}>Guayaquil</label>
                                    <input id="file-guayaquil" onChange={(e) => onchange(e.target)} type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-9 border-end  ">
                                        <h4 id="guayaquil" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                    </div>
                                    <div className="col-3 pt-2 ps-3">
                                        {cuatro ? <a style={{ fontSize: "20px" }} onClick={CargarGuayaquil} ><span className="icon-level-up text-danger"></span></a>
                                            : <span style={{ fontSize: "20px" }} className=" spinner-grow spinner-grow-sm text-danger"></span>}
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
                                <label for="lista" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>Transaciones</label>
                                <input type="file" className="form-control" onChange={(e) => onchange(e.target)} id="lista" />
                            </div>
                            <div className="row">
                                <div className="col-9 border-end  ">
                                    <h4 id="transacion" className="pt-2 text-center" style={{ fontSize: "18px" }}></h4>
                                </div>
                                <div className="col-3 pt-2 ps-3">
                                    {cinco ? <a style={{ fontSize: "20px" }} onClick={CargarTansaciones} ><span className="icon-level-up text-danger"></span></a>
                                        : <span style={{ fontSize: "20px" }} className=" spinner-grow spinner-grow-sm text-danger"></span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-2">
                    <div className="row justify-content-end">
                        <div className="col-8 col-md-6 col-lg-3 mb-2">
                            <div className=" container btn btn-primary">
                                <a href="/concilia" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>CONCILIAR</a>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 col-lg-2 mb-2">
                            <div className=" container btn btn-danger">
                                <a href="" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>Borrar</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 ">
                            <div className=" container btn btn-primary">
                                <a href="/Consolidar" className="text-white fw-bold" style={{
                                    textDecoration: "none"
                                }}>SIN CONSOLIDAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}