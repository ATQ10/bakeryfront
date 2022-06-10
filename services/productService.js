const IP = "192.168.1.66:3030";
//const IP = "bakeryback.herokuapp.com";
module.exports = {
    create: async function (product) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch('http://'+IP+'/api/product/create/', {
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
        body: JSON.stringify(product) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    },
    remove: async function (id) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch('http://'+IP+'/api/product/'+id, {
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
    },
    getByID: async function (id) {
        const response = await fetch('http://'+IP+'/api/product/getByID/'+id);
        const product = await response.json();
        console.log("getByID: ",product);
        return product;
    },
    getAll: async function() {
        const response = await fetch('http://'+IP+'/api/product/getAll');
        const products = await response.json();
        return products;
    },
    update: async function (id, product) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch('http://'+IP+'/api/product/'+id, {
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
        body: JSON.stringify(product) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    },
  }