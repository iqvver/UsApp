import { filterUserAPI } from '../Api/Api'

const SET_DESIGN = 'SET_DESIGN'; // перенная для получения профиля пользователя
const SET_ANALYTICS = 'SET_ANALYTICS'; // перенная для получения профиля пользователя
const SET_MANAGEMENT = 'SET_MANAGEMENT'; // перенная для получения профиля пользователя
const SET_IOS = 'SET_IOS'; // перенная для получения профиля пользователя
const SET_ANDROID = 'SET_ANDROID'; // перенная для получения профиля пользователя
const IS_FETCHING = 'IS_FETCHING';

// иноциализация переменных
let initialState = {
    designers: [], // переменная профиля 
    analytics: [], // переменная профиля 
    management: [], // переменная профиля 
    ios: [], // переменная профиля 
    android: [], // переменная профиля 
    isFetching: false, // загрузка
};
// редьюсер профиля пользователя
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESIGN: {
            // получение профиля пользователя
            return { ...state, designers: action.designers }
        }
        case SET_ANALYTICS: {
            // получение профиля пользователя
            return { ...state, analytics: action.analytics }
        }
        case SET_MANAGEMENT: {
            // получение профиля пользователя
            return { ...state, management: action.management }
        }
        case SET_IOS: {
            // получение профиля пользователя
            return { ...state, ios: action.ios }
        }
        case SET_ANDROID: {
            // получение профиля пользователя
            return { ...state, android: action.android }
        }
        case IS_FETCHING: {
            // загрузка on/off
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

// экшен для получение профиля 
export const setFilteredDesignersAC = (designers) => ({ type: SET_DESIGN, designers });
export const setFilteredAnalyticsAC = (analytics) => ({ type: SET_ANALYTICS, analytics });
export const setFilteredManagementAC = (management) => ({ type: SET_MANAGEMENT, management });
export const setFilteredIosAC = (ios) => ({ type: SET_IOS, ios });
export const setFilteredAndroidAC = (android) => ({ type: SET_ANDROID, android });
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })


// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getFilteredDesigners = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getDesignUser();
        debugger;
        dispatch(setIsFetchingAC(false));
        dispatch(setFilteredDesignersAC(data.data.items));
    }
}
export const getFilteredAnalytics = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getAnalyticsUser();
        dispatch(setIsFetchingAC(false));
        dispatch(setFilteredAnalyticsAC(data.data.items));
    }
}
export const getFilteredManagement = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getManagementUser();
        dispatch(setIsFetchingAC(false));
        dispatch(setFilteredManagementAC(data.data.items));
    }
}
export const getFilteredIos = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getIosUser();
        dispatch(setIsFetchingAC(false));
        dispatch(setFilteredIosAC(data.data.items));
    }
}
export const getFilteredAndroid = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getAandroidUser();
        dispatch(setIsFetchingAC(false));
        dispatch(setFilteredAndroidAC(data.data.items));
    }
}

export default filterReducer;