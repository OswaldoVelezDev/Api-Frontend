import { axiosInstance } from '../helper/axios-config';

const obtenerProductoras = () => {
    return axiosInstance.get('productora', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearProductoras = (data) => {
    return axiosInstance.post('productora', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarProductoras = (productoraId, data) => {
    return axiosInstance.put(`productora${productoraId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerProductoras, crearProductoras, editarProductoras
}