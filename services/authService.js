import appConfig  from '../appConfig';

export async function login(username, password) {
    const loginStructure = {
        "email": username,
        "password": password
    };
    try {
        const url = appConfig.API_URL + '/user/login';
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(loginStructure) // body data type must match "Content-Type" header
        });
        let d = await resp.json(); // parses JSON response into native JavaScript objects
        return d;
    } catch (error) {
        console.log(error);
    }
}
export async function signup(newUser) {
    //newUser has to have
    /*
        username
        fullName
        email
        role => "admin" or "normal"
        password
        position
        plant
        image => as a file if you want
    */
    try {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(API_URL + '/users/register', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    } catch (error) {
        console.log(error);
        return null;
    }
}
