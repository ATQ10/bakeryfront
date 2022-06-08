import { API_URL } from '../appConfig';

export async function createClient(newClient){
    try {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(API_URL+'/api/client/create/', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newClient) // body data type must match "Content-Type" header
            });
        return response.json(); // parses JSON response into native JavaScript objects

    } catch (error) {
        console.log(error)
    }
}

export async function removeClient(id){
    try {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(API_URL+'/api/product/'+id, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: {} // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error)
    }
}

export async function getClientById(id){
    try {
        const response = await fetch(API_URL+'/api/client/getByID/'+id);
        const client = await response.json();
        console.log("getByID: ",client);
        return client;
    } catch (error) {
        console.log(error)
    }
}

export async function getAllClients(){
    try {
        const response = await fetch(API_URL+'/api/client/getAll/');
        const clients = await response.json();
        console.log("getByID: ",clients);
        return clients;
    } catch (error) {
        console.log(error)
    }
}

export async function updateClient(client){
    try {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(API_URL+'/api/client/'+id, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(client) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error)
    }
}