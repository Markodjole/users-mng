import * as actionTypes from './actionTypes';

export const onOpenModal = ( user ) => {
    return {
        type: actionTypes.OPEN_MODAL,
        user: user
    };
};
export const onCloseModal = (  ) => {
    return {
        type: actionTypes.CLOSE_MODAL,
        user: null
    };
};

export const setUser = ( user ) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    };
};
export const setAllUsers = ( users ) => {
    return {
        type: actionTypes.SET_ALL_USERS,
        users: users
    };
};