import { useReducer, createContext } from "react";

export const GlobalContext = createContext([]);

const initialState = {
    name: "",
    surname: "",
    email: "",
    password: "",
    tel: "",
    occupation: "",
    address: "",
    district: "",
    city: "",
    province: "",
    location_id: 0,
    bank_id: 0,
    data: "",
    time: "",
    path: "",
    created: ""
};


export const reducer = (state, action) => {
    switch (action.type) {
      case "SAVE_LOGIN_INFO":
        return {
          ...state,
          name: action.name,
          surname: action.surname,
          tel: action.tel,
          email: action.email,
          password: action.password
        };
      case "SAVE_PERSONAL_INFO":
        return {
          ...state,
          firstName: action.firstName,
          surname: action.surname
        };
      default:
        return {
          ...state
        };
    }
  };
  
  export const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <GlobalContext.Provider value={[state, dispatch]}>
        {props.children}
      </GlobalContext.Provider>
    );
  };