export default function ArchivosViews(){
    return(
        <>
            <div className="col-8 col-md-6 mx-auto">
                <div className="container mb-3 mt-3">
                    <div className="col-10 col-md-9 col-lg-5 mx-auto mx-md-0">
                        <img src="img/speed_logo.png" className="img-fluid text-center" alt=""/>
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
                                        textDecoration: "none"}}>Pichincha</label>
                                    <input id="file-pichincha" type="file" />
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pacifico py-3">
                                    <label for="file-Pacifico" className="text-white fw-bold" style={{
                                        textDecoration: "none"}}>Pacifico</label>
                                    <input id="file-Pacifico" type="file" />
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-produbanco py-3">
                                    <label for="file-Produbanco" className="text-white fw-bold" style={{
                                        textDecoration: "none"}}>Produbanco</label>
                                    <input id="file-Produbanco" type="file" />
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-guayaquil py-3">
                                    <label for="file-Guayaquil" className="text-white fw-bold" style={{
                                        textDecoration: "none"}}>Guayaquil</label>
                                    <input id="file-Guayaquil" type="file" />
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
                                        textDecoration: "none"}}>Pichincha</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-pacifico py-3">
                                    <a href="" className="text-white fw-bold" style={{
                                        textDecoration: "none"}}>Pacifico</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 text-left my-2">
                                <div className="container btn btn-produbanco py-3">
                                    <a href="" className="text-white fw-bold" style={{
                                        textDecoration: "none"}}>Produbanco</a>
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
                                        textDecoration: "none"}}>CONCILIAR</a>
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