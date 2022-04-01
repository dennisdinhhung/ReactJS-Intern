import { useReducer } from "react";
import Context from "./context";
import reducer, {initalState} from '../reducer/reducer'

function Provider({children}){
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;