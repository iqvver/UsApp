import * as axios from "axios";

// базовый адрес запроса на сервер
const instance = axios.create({
    withCredentials: false,
    baseURL: `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/`,
    headers: { "Content-Type": "application/json" }
});

// получение массива со всеми пользователями
export const userAPI = {
    getUsers() {
        return instance.get(`users?__example=all`)
            .then(response => { return response.data })
    }
}