import {useContext} from 'react';
import {SalesContext} from '../services/sales.service';
import CSVReader from './CSVReader';
import DataTable from './DataTable';
import AddDataEntry from './AddDataEntry';
const Sales = () => {
    const {sales, error, loadSales, addSale} = useContext(SalesContext);

    if (error) {
        return <p>Could not retrieve data from csv file</p>
    }
    return (
        <section>
            <CSVReader loadSales={loadSales}/>
            <AddDataEntry addSale={addSale}/>  
            <DataTable sales={sales}/>
        </section>
    )

}

export default Sales;