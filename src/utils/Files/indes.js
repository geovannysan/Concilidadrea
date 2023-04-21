import axios from "axios";
export const filesPichincha = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FilePichincha", fordata)
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export const filesProdubanco = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileProdubanco", fordata)
        return data;
    } catch (error) {
        return error
    }
}
export const filesPacifico = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FilePacifico", fordata)
        return data;
    } catch (error) {
        return error
    }
}
export const filesGuayaquil = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm);
    fordata.append('name', name);
    return fordata
    /* try {
            let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileLista",fordata)
            return data;
        } catch (error) {
            return error
        }*/
}
export const filesTransacio = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileLista", fordata)
        return data;
    } catch (error) {
        return error
    }
}
export const ListaTransaciones = async (inic, fin) => {
    try {
        let { data } = await axios.post("http://localhost:5200/api/listApi/Transaciones", {
            "fecha_inicio": inic,
            "fecha_fin": fin
        })
        return data
    } catch (error) {
        return error
    }
}
export const ListaReporte = async (inic, fin) => {
    try {
        let { data } = await axios.post("http://localhost:5200/api/listApi/Reporte",
            {
                "fecha_inicio": inic,
                "fecha_fin": fin
            })
        return data
    } catch (error) {

    }
}