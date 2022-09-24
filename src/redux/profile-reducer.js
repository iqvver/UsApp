import { profileAPI } from "../Api/Api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'; // перенная для получения профиля пользователя

// иноциализация переменных
let initialState = {
    userProfile: null // переменная профиля 
};
// редьюсер профиля пользователя
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            // получение профиля пользователя
            return { ...state, userProfile: action.userProfile }
        }
        default:
            return state;
    }
}

// экшен для получение профиля 
export const setProfileUserAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getProfileUser = (userId) => async (dispatch) => {
    let profile = await profileAPI.getProfile(userId);
    dispatch(setProfileUserAC(profile.data.items));
}

export default profileReducer;