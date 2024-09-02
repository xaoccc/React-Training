import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/users'

export async function login(authData) {
    const result = await request.post(`${baseUrl}/login`, authData);
    return result;
}


export async function register(registerData) {
    const result = await request.post(`${baseUrl}/register`, registerData);
    return result;

}

export async function logout() {
    const result = await request.get(`${baseUrl}/logout`);
    return result;

}