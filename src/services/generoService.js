import { axiosInstance } from '../helper/axios-config';

const obtenerGeneros = () => {
    return axiosInstance.get('genero', { 
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearGeneros = (data) => {
    return axiosInstance.post('genero', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarGeneros = (generoId, data) => {
    return axiosInstance.put(`genero${generoId}`, data, { 
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerGeneros, crearGeneros, editarGeneros
}