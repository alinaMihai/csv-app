import {useContext} from 'react';
import {SalesContext} from '../services/sales.service';
import CSVReader from './CSVReader';
const Sales = () => {
    const {sales, error} = useContext(SalesContext);
    
    if(error) {
        return <p>Could not retrieve data from csv file</p>
    }
    return (
        <section>
            <CSVReader/>
            Sales: {JSON.stringify(sales)}
        </section>
    )

}


export default Sales;