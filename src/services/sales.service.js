import { createContext, useReducer, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SalesContext = createContext();
const SALES_ADD = 'SALES_ADD';
const SALES_FETCH_SUCCESS = 'SALES_FETCH_SUCCESS';
const SALES_FETCH_ERROR = 'SALES_FETCH_ERROR';
const SALES_DELETE = 'SALES_DELETE';

const initialState = {
    sales: [],
    error: false,
};

const reducer = (state = [], action) => {
    if (action.type === SALES_ADD) {
        return {
            ...state,
            sales: [action.payload, ...state.sales],
        };
    }
    if (action.type === SALES_FETCH_SUCCESS) {
        return {
            ...state,
            error: false,
            sales: action.payload,
        };
    }
    if (action.type === SALES_FETCH_ERROR) {
        return {
            ...state,
            error: true,
        };
    }
    if (action.type === SALES_DELETE) {
        return {
            ...state,
            sales: state.sales.filter((sale) => sale.key !== action.payload),
        };
    }
    return state;
};

export const SalesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loadSales = useCallback(
        ({ data, hasError }) => {
            if (hasError) {
                dispatch({ type: SALES_FETCH_ERROR });
            } else {
                const parsedData = data.map((entry) => {
                    return {
                        ...entry,
                        key: entry['Order ID'],
                    };
                });
                dispatch({ type: SALES_FETCH_SUCCESS, payload: parsedData });
            }
        },
        [dispatch]
    );

    const addSale = useCallback(
        (sale) => {
            const key = uuidv4();
            const newSale = {
                Region: sale.region,
                Country: sale.country,
                'Item Type': sale.itemType,
                'Order Date': sale.orderDate.toDateString(),
                'Order ID': key,
                'Ship Date': sale.shipDate?.toDateString(),
                'Units Sold': sale.unitsSold,
                'Unit Price': sale.unitPrice,
                'Unit Cost': sale.unitCost,
                key,
            };
            dispatch({ type: SALES_ADD, payload: newSale });
        },
        [dispatch]
    );

    const deleteSale = useCallback(
        (key) => {
            dispatch({ type: SALES_DELETE, payload: key });
        },
        [dispatch]
    );

    return (
        <SalesContext.Provider
            value={{
                sales: state.sales,
                error: state.error,
                addSale,
                loadSales,
                deleteSale,
            }}
        >
            {children}
        </SalesContext.Provider>
    );
};
