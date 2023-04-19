import axios from "axios";
export const filesPichincha = async (parm,name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name',name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FilePichincha",fordata)
        return data;
    } catch (error) {
        return error;
    }
}
export const filesProdubanco = async(parm,name)=>{
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileProdubanco",fordata)
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
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FilePacifico",fordata)
        return data;
    } catch (error) {
        return error
    }
}
/*export const filesGuayaquil = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileLista",fordata)
        return data;
    } catch (error) {
        return error
    }
}*/
export const filesTransacio = async (parm, name) => {
    const fordata = new FormData();
    fordata.append('File', parm[0]);
    fordata.append('name', name);
    try {
        let { data } = await axios.post("http://localhost:5200/api/FilesApi/FileLista",fordata)
        return data;
    } catch (error) {
        return error
    }
}