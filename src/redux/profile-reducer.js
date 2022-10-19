import { profileAPI, userAPI } from "../Api/Api";

// профиль получаю локально, почему-то сервер отвечает всегда одинаково

const SET_USER_PROFILE = 'SET_USER_PROFILE'; // перенная для получения профиля пользователя
const SET_USER_PROFILE_ID = 'SET_USER_PROFILE_ID'; // перенная для получения id профиля пользователя
const IS_FETCHING = 'IS_FETCHING'; //загрузка
const SET_ERROR = 'SET_ERROR'; // ошибка

// иноциализация переменных
let initialState = {
    userProfile: '', // переменная профиля 
    userId: '', // переменная id 
    errorProfileUser: "", // ошибка при загрузке все пользователей
    isFetching: false, // загрузка
};
// редьюсер профиля пользователя
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            // получение профиля пользователя
            return { ...state, userProfile: action.userProfile.find((u) => u.id === state.userId) }
        }
        case SET_USER_PROFILE_ID: {
            // получение профиля пользователя
            return { ...state, userId: action.userId }
        }
        case SET_ERROR: {
            // если ошибка 
            return { ...state, errorProfileUser: action.errorProfileUser }
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
export const setProfileUserAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setProfileUserIdAC = (userId) => ({ type: SET_USER_PROFILE_ID, userId });
export const setErrorAC = (errorProfileUser) => ({ type: SET_ERROR, errorProfileUser });
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getProfileUser = () => async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    let profile = await userAPI.getUsers();
    if (profile.status < 500) {
        dispatch(setProfileUserAC(profile.data.items));
        dispatch(setIsFetchingAC(false));
    } else {
        dispatch(setErrorAC(profile.message));
    }
}

export const getNewUserId = (userId) => (dispatch) => {
    dispatch(setProfileUserIdAC(userId));
}

export default profileReducer;