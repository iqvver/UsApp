import { userAPI } from '../Api/Api';
import { getDayOfYear, dateToYMD } from "../utils";

const SET_USERS = 'SET_USERS'; // перенная для получения всех пользователей
const SET_ERROR = 'SET_ERROR'; // ошибка
const IS_FETCHING = 'IS_FETCHING';
const IS_USERS_SEARCH = 'IS_USERS_SEARCH';
const IS_USERS_SORT = 'IS_USERS_SORT';

// иноциализация переменных
let initialState = {
    users: [], // массив пользователей
    errorAllUsers: "", // ошибка при загрузке все пользователей
    isFetching: false, // загрузка
    searchUserName: '',
    sortUsers: 'firstName',
};

// редьюсер получения массива пользователей
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS: {
            // получение пользователей 
            return {
                ...state, users: state.sortUsers === 'firstName' ? action.users.filter((user) => {
                    if (state.searchUserName) {
                        return (
                            user.firstName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                            user.lastName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                            user.userTag.toLowerCase().includes(state.searchUserName.toLowerCase())
                        );
                    }
                    return action.users;
                }).sort(function (a, b) {
                    var nameA = a.firstName.toLowerCase(),
                        nameB = b.firstName.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
                    : action.users.filter((user) => {
                        if (state.searchUserName) {
                            return (
                                user.firstName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                                user.lastName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                                user.userTag.toLowerCase().includes(state.searchUserName.toLowerCase())
                            );
                        }
                        return action.users;
                    }).sort((a, b) =>
                        dateToYMD(new Date(a.birthday)) >
                            dateToYMD(new Date(b.birthday)) >
                            0
                            ? 1
                            : -1
                    )
                        .reduce(
                            (acc, elem) => {
                                if (
                                    getDayOfYear(new Date(elem.birthday)) < getDayOfYear(new Date())
                                ) {
                                    acc[1].push(elem);
                                } else {
                                    acc[0].push(elem);
                                }
                                return acc;
                            },
                            [[], []]
                        )
            }
        }

        case SET_ERROR: {
            // получение пользователей 
            return { ...state, errorAllUsers: action.errorAllUsers }
        }
        case IS_USERS_SEARCH: {
            // получение пользователей 
            return { ...state, searchUserName: action.searchUserName }
        }
        case IS_USERS_SORT: {
            // получение пользователей 
            return { ...state, sortUsers: action.sortUsers }
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
export const setUserSearchAC = (searchUserName) => ({ type: IS_USERS_SEARCH, searchUserName });
export const setSortUserhAC = (sortUsers) => ({ type: IS_USERS_SORT, sortUsers });
export const setErrorAC = (errorAllUsers) => ({ type: SET_ERROR, errorAllUsers });
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка и отправка профилей
// ассинхронный экшен
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await userAPI.getUsers();
        if (data.status < 500) {
            dispatch(setUsersAC(data.data.items));
            dispatch(setIsFetchingAC(false));
        } else {
            dispatch(setErrorAC(data.message));
        }
    }
}
export const newSearchUser = (searchUserName) => (dispatch) => {
    dispatch(setUserSearchAC(searchUserName));
}
export const newSortUsers = (sortUsers) => (dispatch) => {
    dispatch(setSortUserhAC(sortUsers));
}

export default usersReducer;