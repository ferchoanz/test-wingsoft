import axios from 'axios';

const token = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''

const axios_instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
})



export async function get(url) {
    return await axios_instance.get(url)
        .then(response => ({
            status: true,
            number_status: response.status,
            data: response.data
        }))
        .catch(error => ({
            status: false,
            number_status: error.response ? error.response.status : error,
            data: error.response ? error.response.data : error.message
        }))
};


export async function post(url, data) {
    return await axios_instance.post(url, data)
        .then(response => ({
            status: true,
            number_status: response.status,
            data: response.data,
        }))
        .catch(error => ({
            status: false,
            number_status: error.response ? error.response.status : error,
            data: error.response ? error.response.data : error.message
        }))
};

export async function put(url, data) {
    return await axios_instance.put(url, data)
        .then(response => ({
            status: true,
            number_status: response.status,
            data: response.data
        }))
        .catch(error => ({
            status: false,
            number_status: error.response ? error.response.status : error,
            data: error.response ? error.response.data : error.message
        }))
};

export async function patch(url, data) {
    return await axios_instance.patch(url, data)
        .then(response => ({
            status: true,
            number_status: response.status,
            data: response.data
        }))
        .catch(error => ({
            status: false,
            number_status: error.response ? error.response.status : error,
            data: error.response ? error.response.data : error.message
        }))
};

export async function del(url) {
    return await axios_instance.delete(url)
        .then(response => ({
            status: true,
            number_status: response.status,
            data: response.data
        }))
        .catch(error => ({
            status: false,
            number_status: error.response ? error.response.status : error,
            data: error.response ? error.response.data : error.message
        }))
}