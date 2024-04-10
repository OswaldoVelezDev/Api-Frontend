import { axiosInstance } from '../helper/axios-config';

const obtenerTipos = () => {
    return axiosInstance.get('tipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearTipos = (data) => {
    return axiosInstance.post('tipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarTipos = (tipoId, data) => {
    return axiosInstance.put(`tipo/${tipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerTipos, crearTipos, editarTipos
}