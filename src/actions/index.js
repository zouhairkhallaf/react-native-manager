import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER, payload: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => logInUserSuccess(dispatch, user))
        .catch((error) => {
            console.log("Firebase just caught an error 1: ", error)
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => logInUserSuccess(dispatch, user))
                .catch((error) => { 
                    console.log("Firebase just caught an error 2: ", error)
                    logInUserfail(dispatch)
                })
        });
    }
}


const logInUserfail     = (dispatch      ) => {dispatch({type: LOGIN_USER_FAIL                  })}
const logInUserSuccess  = (dispatch, user) => {dispatch({type: LOGIN_USER_SUCCESS, payload: user})}
