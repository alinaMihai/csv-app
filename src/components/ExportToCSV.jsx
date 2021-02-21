import { jsonToCSV } from 'react-papaparse';
import Button from 'antd/es/button';
export default function ExportToCSV({ data }) {
    const handleExportFile = () => {
        const results = jsonToCSV(data);
        let tempLink = document.createElement('a');
        tempLink.href = window.URL.createObjectURL(
            new Blob([results], { type: 'text/csv' })
        );
        tempLink.setAttribute('download', 'sales.csv');
        tempLink.click();
    };
    return (
        <Button type="primary" onClick={handleExportFile}>
            Export to CSV
        </Button>
    );
}
