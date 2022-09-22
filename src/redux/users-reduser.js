import { userAPI } from '../Api/Api'

const SET_USERS = 'SET_USERS'; // перенная для получения всех пользователей
const IS_FETCHING = 'IS_FETCHING';

// иноциализация переменных
let initialState = {
    users: [], // массив пользователей
    isFetching: false, // загрузка
};

// редьюсер получения массива пользователей
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS: {
            // получение пользователей 
            return { ...state, users: action.users }
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
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка и отправка профилей
// ассинхронный экшен
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await userAPI.getUsers();
        dispatch(setIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
    }
}

export default usersReducer;