import * as axios from "axios";

// компонент Api в котором формируется запрос на сервер и получает ответ
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
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    }
}

// переход в профиль выбранной пользователя
// почему всегда приходит один и тот же профиль по этому ипользовал локально
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users?__` + userId)
            // Запрос выполнен, и сервер ответил все ок
            //.then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
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
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getAnalyticsUser() {
        return instance.get(`users?__example=analytics`)
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getManagementUser() {
        return instance.get(`users?__example=management`)
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getIosUser() {
        return instance.get(`users?__example=ios`)
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    },
    getAandroidUser() {
        return instance.get(`users?__example=android`)
            // Запрос выполнен, и сервер ответил все ок
            .then(response => { return response })
            .catch((error) => {
                if (error) {
                    // Запрос выполнен, и сервер ответил ошибкой
                    console.log('ошибка', error.message);
                    return error
                }
            }
            )
    }
}