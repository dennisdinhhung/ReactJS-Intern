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
} from "../action/constants";
import { nanoid } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setProduct,
  addProduct,
  updateProduct,
  getProduct,
} from "../action/actions";
const initState = {
  loading: false,
  currentUser:null,
  error : null,
  products: [],
  product: {
    id: null,
    title: "",
    category: "",
    price: "",
    img: "",
    desc: "",
  },
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:

      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_PRODUCT:
      let id = nanoid();
      const newAddProduct = [...state.products];
      action.payload.id = id;
      newAddProduct.push(action.payload);
      return {
        ...state,
        users: [...newAddProduct],
      };
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
    case DELETE_PRODUCT:
      // const preUser = [...state.users];
      // const userAfterDelete = state.users.filter((user) => {
      //   return user.id !== action.payload;
      // });
      return {
        ...state,
        products: [...state.products],
      };
      case LOGIN_START:
      case REGISTER_START:
        return{
          ...state,
          loading:true
        }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
          return{
            ...state,
            loading:false,
            currentUser:action.payload
          }
          case LOGIN_FAIL:
          case REGISTER_FAIL:
            return{
              ...state,
              loading:false,
              error:action.payload
            }
            default:
              return state
  }

  
};

export default formReducer;
