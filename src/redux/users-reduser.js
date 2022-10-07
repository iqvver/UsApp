import { userAPI } from '../Api/Api';
import { getDayOfYear, dateToYMD } from "../utils";

const SET_USERS = 'SET_USERS'; // перенная для получения всех пользователей
const SET_ERROR = 'SET_ERROR'; // ошибка
const IS_FETCHING = 'IS_FETCHING'; //загрузка
const IS_USERS_SEARCH = 'IS_USERS_SEARCH'; // поиск пользователей
const IS_USERS_SORT = 'IS_USERS_SORT'; // сортировка пользователей

// иноциализация переменных
let initialState = {
    usersList: [], // массив пользователей
    errorAllUsers: false, // ошибка при загрузке все пользователей
    isFetching: false, // загрузка
    searchUserName: '', // параметр поиска
    sortUsers: 'firstName', // параметр сортировки по умолчанию по имени
    usersBirthdayNextYear: [],
    usersBirthdayThisYear: [],
};

// редьюсер получения массива пользователей
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            // получение пользователей, фильтрация и сортировка списка
            return {
                ...state.usersBirthdayNextYear = [],
                ...state.usersBirthdayThisYear = [],
                ...state, usersList: state.sortUsers === 'firstName' ? action.usersList.filter((user) => {
                    //если выбран фильтр "поалфавиту"
                    if (state.searchUserName) {
                        //фильтрация списка пользователей
                        return (
                            user.firstName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                            user.lastName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                            user.userTag.toLowerCase().includes(state.searchUserName.toLowerCase())
                        );
                    }
                    return action.usersList;
                    // и сортировка  по имени
                }).sort(function (a, b) {
                    var nameA = a.firstName.toLowerCase(),
                        nameB = b.firstName.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
                    //если выбран фильтр "дню рождения"
                    : action.usersList.filter((user) => {
                        if (state.searchUserName) {
                            return (
                                user.firstName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                                user.lastName.toLowerCase().includes(state.searchUserName.toLowerCase()) ||
                                user.userTag.toLowerCase().includes(state.searchUserName.toLowerCase())
                            );
                        }
                        return action.usersList;
                        //и сортировка. список отображается от ближайшей даты дня рождения вниз.
                    }).sort((a, b) =>
                        dateToYMD(new Date(a.birthday)) >
                            dateToYMD(new Date(b.birthday)) >
                            0
                            ? 1
                            : -1
                    )
                        .reduce(
                            (acc, elem) => {
                                //если номер дня рожения меньше текущего то 
                                if (
                                    getDayOfYear(new Date(elem.birthday)) < getDayOfYear(new Date())
                                ) {
                                    state.usersBirthdayNextYear.push(elem);
                                    //если номер дня рожения больще текущего то 
                                } else {
                                    state.usersBirthdayThisYear.push(elem);
                                }
                                return acc;
                            },
                            [], [],
                        ),     
            }
        }

        case SET_ERROR: {
            // получение пользователей 
            return { ...state, errorAllUsers: action.errorAllUsers }
        }
        case IS_USERS_SEARCH: {
            // получение параметров поиска 
            return { ...state, searchUserName: action.searchUserName }
        }
        case IS_USERS_SORT: {
            // получение параметров сортировки 
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
export const setUsersAC = (usersList) => ({ type: SET_USERS, usersList });
export const setUserSearchAC = (searchUserName) => ({ type: IS_USERS_SEARCH, searchUserName });
export const setSortUserhAC = (sortUsers) => ({ type: IS_USERS_SORT, sortUsers });
export const setErrorAC = (errorAllUsers) => ({ type: SET_ERROR, errorAllUsers });
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка пареметров
// ассинхронный экшен
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await userAPI.getUsers();
        if (data.status < 500) {
            dispatch(setUsersAC(data.data.items));
            dispatch(setIsFetchingAC(false));
        } else {
            dispatch(setErrorAC(true));
        }
    }
}
//полечение параметра поиска
export const newSearchUser = (searchUserName) => (dispatch) => {
    dispatch(setUserSearchAC(searchUserName));
}
//полечение параметра сортировки
export const newSortUsers = (sortUsers) => (dispatch) => {
    dispatch(setSortUserhAC(sortUsers));
}

export default usersReducer;