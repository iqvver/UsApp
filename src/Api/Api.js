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
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    }
}

// переход в профиль выбранной пользователя
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users?__` + userId)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    }
}
export const filterUserAPI = {
    getDesignUser() {
        return instance.get(`users?__example=design`)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getAnalyticsUser() {
        return instance.get(`users?__example=analytics`)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getManagementUser() {
        return instance.get(`users?__example=management`)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getIosUser() {
        return instance.get(`users?__example=ios`)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getAandroidUser() {
        return instance.get(`users?__example=android`)
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Request made and server responded error
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    }
}