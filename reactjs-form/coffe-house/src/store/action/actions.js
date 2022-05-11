import {
  GET_PRODUCT,
  SET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,
  LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL
} from "./constants";
import {auth} from "../../firebase"
// USE THUNK
const apiProduct = "http://localhost:3000/menu";
export const getProduct = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiProduct);
      const products = await response.json();
      
      dispatch({
        type: GET_PRODUCT,
        payload: products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Without THUNK
export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload,
});

export const addProduct = (payload) => async (dispatch) => {
  try {
    await fetch(apiProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADD_PRODUCT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (payload) => async (dispatch) => {
  try {
    await fetch(apiProduct + "/" + payload, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_PRODUCT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (payload) => async (dispatch) => {
  try {
    await fetch(apiProduct + "/" + payload.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: UPDATE_PRODUCT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const registerStart = () => ({
  type: REGISTER_START,
});
export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload:user
});
export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload:error
});
export const loginStart = () => ({
  type: LOGIN_START,
});
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload:user
});
export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload:error
});

export const registerInitiate = (email,password,displayName) =>{
  return function ( dispatch){
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
      user.updateProfile({
        displayName
      })
      dispatch(registerSuccess(user))
    })
    .catch((error)=>dispatch(registerFail(error.message)))
  }
}

export const loginInitiate = (email,password) =>{
  return function ( dispatch){
    dispatch(loginStart());
    auth.signInWithUserWithEmailAndPassword(email,password).then(({user})=>{
      dispatch(loginSuccess(user))
    })
    .catch((error)=>dispatch(loginFail(error.message)))
  }
}