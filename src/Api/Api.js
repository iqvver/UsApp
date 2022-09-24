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

// переход в профиль выбранной пользователя
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users?__` + userId)
    }
}

/*
fetch(
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__497f6eca-6276-4993-bfeb-53cbbbba6f08",
)
    .then((response) => response.json())
    .then((response) => console.log(response))
.catch((err) => console.error(err));*/
