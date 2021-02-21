import { useContext } from 'react';
import { SalesContext } from '../../services/sales.service';
import CSVReader from '../csv-reader/CSVReader';
import DataTable from '../DataTable';
import AddDataEntry from '../AddDataEntry';
import SalesStatistics from '../sale-statistics/SalesStatistics';
import ExportToCSV from '../ExportToCSV';
import './sales.css';
const Sales = () => {
    const { sales, error, loadSales, addSale } = useContext(SalesContext);

    if (error) {
        return <p>Could not retrieve data from csv file</p>;
    }
    return (
        <div className="sales">
            <section className="sales__section">
                <CSVReader loadData={loadSales} />
                <AddDataEntry addSale={addSale} />
                <ExportToCSV data={sales} />
            </section>
            <section className="sales__section">
                <DataTable data={sales} />
            </section>
            <section className="sales__section">
                <SalesStatistics data={sales} />
            </section>
        </div>
    );
};

export default Sales;
