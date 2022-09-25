const SET_SORT = 'SET_USER_PROFILE'; // перенная для получения профиля пользователя

// иноциализация переменных
let initialState = {
    sort: 'alphabet' // переменная профиля 
};
// редьюсер профиля пользователя
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: {
            // получение профиля пользователя
            return { ...state, sort: action.sort }
        }
        default:
            return state;
    }
}

// экшен для получение профиля 
export const setProfileUserAC = (sort) => ({ type: SET_SORT, sort });

// получение, обработка и отправка профиля пользователя
// ассинхронный экшен
export const getProfileUser = (userId) => async (dispatch) => {
    let profile = await profileAPI.getProfile(userId);
    dispatch(setProfileUserAC(profile.data.items));
}

export default profileReducer;