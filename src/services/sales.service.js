import {createContext, useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

export const SalesContext = createContext();
const SALES_ADD = 'SALES_ADD';
const SALES_FETCH_SUCCESS = 'SALES_FETCH_SUCCESS';
const SALES_FETCH_ERROR = 'SALES_FETCH_ERROR';

const initialState = {
    sales: [],
    error: false
}

const reducer = (state = [], action) => {
    if (action.type === SALES_ADD) {
        return {
            sales: [
                ...state.sales, {
                    key: uuidv4(),
                    ...action.payload
                }
            ],
            ...state
        };
    }
    if (action.type === SALES_FETCH_SUCCESS) {
        return {
            ...state,
            error: false,
            sales: action.payload
        }
    }
    if (action.type === SALES_FETCH_ERROR) {
        return {
            ...state,
            error: true
        }
    }
    return state;
}

export const SalesProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(reducer, initialState);

    const loadSales = ({data, hasError}) => {
        if (hasError) {
            dispatch({type: SALES_FETCH_ERROR});

        } else {
            const parsedData = data.map(entry => {
                return {...entry, key: entry['Order ID']}
            })
            dispatch({type: SALES_FETCH_SUCCESS, payload: parsedData});
        }
    }

    const addSale = (sale) => {
        dispatch({type: SALES_ADD, payload: sale})
    }

    return (
        <SalesContext.Provider
            value={{
            sales: state.sales,
            error: state.error,
            addSale,
            loadSales
        }}>
            {children}
        </SalesContext.Provider>
    );
};