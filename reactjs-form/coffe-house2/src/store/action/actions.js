import {
  GET_PRODUCT,
  SET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,GET_PAYMENT,
  UPDATE_PRODUCT,DECREASE_CART,DELETE_PAYMENT,
  REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,ADJUST_QTY,
  LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL,GET_USER,SET_USER,ADD_USER,DELETE_USER,UPDATE_USER,GET_CART,SET_CART,ADD_CART,DELETE_CART, INCREASE_CART, ADD_PAYMENT
} from "./constants";
import {auth} from "../../firebase"
// USE THUNK
const apiProduct ="http://localhost:3000/menu";
const apiUser = "http://localhost:3000/user"
const apiCart = "http://localhost:3000/cart"
const apiCheckPayment = "http://localhost:3000/checkpayment"

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
export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiUser);
      const users = await response.json();
      
      dispatch({
        type: GET_USER,
        payload: users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiCart);
      const carts = await response.json();
      
      dispatch({
        type: GET_CART,
        payload: carts,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPayment = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiCheckPayment);
      const checkPayment = await response.json();
      
      dispatch({
        type: GET_PAYMENT,
        payload: checkPayment,
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
export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});
export const setCart = (payload) => ({
  type: SET_CART,
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
export const addPayment = (payload) => async (dispatch) => {
  try {
    await fetch(apiCheckPayment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADD_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};
export const inCrease = (payload) => async (dispatch) => {
  try {
    dispatch({
      type:INCREASE_CART,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};
export const deCrease = (payload) => async (dispatch) => {
  try {
    dispatch({
      type:DECREASE_CART,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};
export const addUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADD_USER, 
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCart = (payload) => async (dispatch) => {
  try {
    await fetch(apiCart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADD_CART,
    });
  } catch (error) {
    console.log(error);
  }
};
export const adjustQty = (payload) => async (dispatch) => {
  try {
    await fetch(apiCart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADJUST_QTY,
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
export const deletePayment = (payload) => async (dispatch) => {
  try {
    await fetch(apiCheckPayment + "/" + payload, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCart = (payload) => async (dispatch) => {
  try {
    await fetch(apiCart + "/" + payload, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_CART,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser + "/" + payload, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_USER,
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
export const updateUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser + "/" + payload.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: UPDATE_USER,
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