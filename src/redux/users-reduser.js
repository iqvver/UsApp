import { userAPI } from '../Api/Api'

const SET_USERS = 'SET_USERS'; // перенная для получения всех пользователей
const SET_ERROR = 'SET_ERROR'; // ошибка
const IS_FETCHING = 'IS_FETCHING';
const IS_US = 'IS_US';

// иноциализация переменных
let initialState = {
    users: [], // массив пользователей
    errorAllUsers: "", // ошибка при загрузке все пользователей
    isFetching: false, // загрузка
    usName: ''
};

// редьюсер получения массива пользователей
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS: {
            // получение пользователей 
            return { ...state, users: action.users }
        }
        case SET_ERROR: {
            // получение пользователей 
            return { ...state, errorAllUsers: action.errorAllUsers }
        }
        case SET_ERROR: {
            // получение пользователей 
            return { ...state, usName: action.usName }
        }

        case IS_FETCHING: {
            // загрузка on/off
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

// экшен для получения юзеров
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setUsAC = (usName) => ({ type: IS_US, usName });
export const setErrorAC = (errorAllUsers) => ({ type: SET_ERROR, errorAllUsers });
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка и отправка профилей
// ассинхронный экшен
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await userAPI.getUsers();
        dispatch(setIsFetchingAC(false));
        if (data.status < 500) {
            dispatch(setUsersAC(data.data.items));
        } else {
            dispatch(setErrorAC(data.message));
        }
    }
}
export const newSearchUs = (usName) => (dispatch) => {
    dispatch(setUsAC(usName));
}

export default usersReducer;