import {
  SET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER,
  SET_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_CART,
  SET_CART,
  ADD_CART,
  DELETE_CART,
  INCREASE_CART,DELETE_PAYMENT,
  ADJUST_QTY,DECREASE_CART,ADD_PAYMENT, GET_PAYMENT
} from "../action/constants";
import { v4 as uuidv4 } from "uuid";
import { nanoid } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initState = {
  loading: false,
  currentUser: null,
  error: null,
  products: [],
  product: {
    id: null,
    title: "",
    category: "coffe",
    price: "",
    img: "",
    desc: "",
    amount: 1,
  },
  users: [],
  user: {
    id: null,
    userName: "",
    passWord: "",
    name: "",
    role: "user",
  },
  carts: [],
  checkPayment:[]
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        carts: action.payload,
      };
      case GET_PAYMENT:
      return {
        ...state,
        checkPayment: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        carts: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_PRODUCT: {
      let id = nanoid();
      const newAddProduct = [...state.products];
      action.payload.id = id;
      newAddProduct.push(action.payload);
      return {
        ...state,
        products: [...newAddProduct],
      };
    }
    case ADD_PAYMENT: {
      let id = nanoid();
      const newAddPayment = [...state.checkPayment];
      action.payload.id = id;
      newAddPayment.push(action.payload);
      return {
        ...state,
        checkPayment: [...newAddPayment],
      };
    }
    case ADD_CART: {
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.carts.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        carts: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case INCREASE_CART: {
      //  const product = state.carts.map((item)=> item.id === action.payload)
      const tempCart = state.carts.map((item) => {
        console.log("condition", item.id === action.payload);
        console.log("change inf", { ...item, amount: item.amount + 1 });
        if (item.id === action.payload)
          return { ...item, amount: item.amount + 1 };
        else return item;
      });
      console.log(tempCart,"temp");
      return {
        ...state,
        carts: [...tempCart]
      };
    }
    case DECREASE_CART: {
      //  const product = state.carts.map((item)=> item.id === action.payload)
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload&& item.amount > 1)
          return { ...item, amount: item.amount - 1 }; 
        else return item;
      });
      console.log(tempCart,"temp--");
      return {
        ...state,
        carts: [...tempCart]
      };
    }
    case ADD_USER: {
      let id = nanoid();
      const newAddUser = [...state.users];
      action.payload.id = id;
      newAddUser.push(action.payload);
      return {
        ...state,
        users: [...newAddUser],
      };
    }
    case UPDATE_PRODUCT:
      const updateProduct = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product = action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: [...updateProduct],
      };
    case UPDATE_USER:
      const updateUser = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
      return {
        ...state,
        products: [...updateProduct],
      };
    case DELETE_PRODUCT:
      // const preUser = [...state.users];
      // const userAfterDelete = state.users.filter((user) => {
      //   return user.id !== action.payload;
      // });
      return {
        ...state,
        products: [...state.products],
      };
    case DELETE_USER:
      // const preUser = [...state.users];
      // const userAfterDelete = state.users.filter((user) => {
      //   return user.id !== action.payload;
      // });
      return {
        ...state,
        users: [...state.users],
      };
    case DELETE_CART:
      const preCart = [...state.carts];
      const cartAfterDelete = preCart.filter((cart) => {
        return cart.id !== action.payload;
      });
      return {
        ...state,
        carts: [...cartAfterDelete],
      };
      case DELETE_PAYMENT:
      const prePayment = [...state.checkPayment];
      const paymentAfterDelete = prePayment.filter((cart) => {
        return cart.id !== action.payload;
      });
      return {
        ...state,
        checkPayment: [...paymentAfterDelete],
      };
      case ADJUST_QTY:
      return {
        ...state,
        cart:state.carts.map(item=>item.id === action.payload?{...item,qty:action.payload.qty}:item)
      };
    case LOGIN_START:
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
