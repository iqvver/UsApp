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
/*const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
fetch(
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__497f6eca-6276-4993-bfeb-53cbbbba6f08",
    options
)
    .then((response) => response.json())
    .then((response) => console.log('ff', response))
.catch((err) => console.error(err));
*/

export const filterUserAPI = {
    getDesignUser() {
        return instance.get(`users?__example=design`)
            .then(response => { return response.data })
    },
    getAnalyticsUser() {
        return instance.get(`users?__example=analytics`)
            .then(response => { return response.data })
    },
    getManagementUser() {
        return instance.get(`users?__example=management`)
            .then(response => { return response.data })
    },
    getIosUser() {
        return instance.get(`users?__example=ios`)
            .then(response => { return response.data })
    },
    getAandroidUser() {
        return instance.get(`users?__example=android`)
            .then(response => { return response.data })
    }
}