import { filterUserAPI } from '../Api/Api'; //получение данныхиз Api

const SET_DESIGN = 'SET_DESIGN'; // перенная для получения профиля пользователя
const SET_ANALYTICS = 'SET_ANALYTICS'; // перенная для получения профиля пользователя
const SET_MANAGEMENT = 'SET_MANAGEMENT'; // перенная для получения профиля пользователя
const SET_IOS = 'SET_IOS'; // перенная для получения профиля пользователя
const SET_ANDROID = 'SET_ANDROID'; // перенная для получения профиля пользователя
const IS_FETCHING = 'IS_FETCHING'; // загрузка

// иноциализация переменных
let initialState = {
    designersList: [], // переменная департамента 
    analyticsList: [], // переменная департамента 
    managementList: [], // переменная департамента 
    iosList: [], // переменная департамента 
    androidList: [], // переменная департамента 
    isFetching: false, // загрузка
};
// редьюсер профиля пользователя
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESIGN: {
            // получение пользователей департамента
            return { ...state, designersList: action.designersList }
        }
        case SET_ANALYTICS: {
            // получение пользователей департамента
            return { ...state, analyticsList: action.analyticsList }
        }
        case SET_MANAGEMENT: {
            // получение пользователей департамента
            return { ...state, managementList: action.managementList }
        }
        case SET_IOS: {
            // получение пользователей департамента
            return { ...state, iosList: action.iosList }
        }
        case SET_ANDROID: {
            // получение пользователей департамента
            return { ...state, androidList: action.androidList }
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
export const setFilteredDesignersAC = (designersList) => ({ type: SET_DESIGN, designersList });
export const setFilteredAnalyticsAC = (analyticsList) => ({ type: SET_ANALYTICS, analyticsList });
export const setFilteredManagementAC = (managementList) => ({ type: SET_MANAGEMENT, managementList });
export const setFilteredIosAC = (iosList) => ({ type: SET_IOS, iosList });
export const setFilteredAndroidAC = (androidList) => ({ type: SET_ANDROID, androidList });
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })


// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getFilteredDesigners = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getDesignUser();
        dispatch(setFilteredDesignersAC(data.data.items));
        dispatch(setIsFetchingAC(false));
    }
}
export const getFilteredAnalytics = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getAnalyticsUser();
        dispatch(setFilteredAnalyticsAC(data.data.items));
        dispatch(setIsFetchingAC(false));
    }
}
export const getFilteredManagement = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getManagementUser();
        dispatch(setFilteredManagementAC(data.data.items));
        dispatch(setIsFetchingAC(false));
    }
}
export const getFilteredIos = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getIosUser();
        dispatch(setFilteredIosAC(data.data.items));
        dispatch(setIsFetchingAC(false));
    }
}
export const getFilteredAndroid = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await filterUserAPI.getAandroidUser();
        dispatch(setFilteredAndroidAC(data.data.items));
        dispatch(setIsFetchingAC(false));
    }
}

export default filterReducer;