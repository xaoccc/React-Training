import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/users'

export async function login(authData) {

    const result = await request.post(`${baseUrl}/login`, authData);
    console.log(result);
    console.log(authData);

    return result;

}


export async function register(registerData) {
    const result = await request.post(`${baseUrl}/register`, registerData);
    console.log(result);
    console.log(registerData);

    return result;

}