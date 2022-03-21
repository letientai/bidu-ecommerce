import { useReducer } from 'react';
import Context from './context'
import Reducer,{InitState} from './reduce'

function Provider({children}) {
    const [state, dispatch] = useReducer(Reducer, InitState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider;