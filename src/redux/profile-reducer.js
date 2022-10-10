import { profileAPI } from "../Api/Api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'; // перенная для получения профиля пользователя
const SET_ERROR = 'SET_ERROR'; // ошибка

// иноциализация переменных
let initialState = {
    userProfile: null, // переменная профиля 
    errorProfileUser: "", // ошибка при загрузке все пользователей
};
// редьюсер профиля пользователя
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            // получение профиля пользователя
            return { ...state, userProfile: action.userProfile }
        }
        case SET_ERROR: {
            // если ошибка 
            return { ...state, errorProfileUser: action.errorProfileUser }
        }
        default:
            return state;
    }
}

// экшен для получение профиля 
export const setProfileUserAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setErrorAC = (errorProfileUser) => ({ type: SET_ERROR, errorProfileUser });

// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getProfileUser = (userId) => async (dispatch) => {
    let profile = await profileAPI.getProfile(userId);
    if (profile.status < 400) {
        dispatch(setProfileUserAC(profile.data.items[0]));
    } else {
        dispatch(setErrorAC(profile.message));
    }
}

export default profileReducer;