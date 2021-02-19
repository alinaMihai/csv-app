import {Table} from 'antd';

const salesColumns = getColumns([
    {
        name: 'Region',
        width: 100,
        sorter: (a, b) => a['Region'].localeCompare(b['Region'], 'en')
    }, {
        name: 'Country',
        sorter: (a, b) => a['Country'].localeCompare(b['Country'], 'en')
    }, {
        name: 'Item Type',
        sorter: (a, b) => a['Item Type'].localeCompare(b['Item Type'], 'en')
    }, {
        name: 'Order Date',
        sorter: (a, b) => new Date(a['Order Date']).getTime() - new Date(b['Order Date']).getTime()
    }, {
        name: 'Order ID'
    }, {
        name: 'Ship Date',
        sorter: (a, b) => new Date(a['Ship Date']).getTime() - new Date(b['Ship Date']).getTime()
    }, {
        name: 'Units Sold',
        sorter: (a, b) => a['Units Sold'] - b['Units Sold']
    }, {
        name: 'Unit Price',
        sorter: (a, b) => a['Unit Price'] - b['Unit Price']
    }, {
        name: 'Unit Cost',
        sorter: (a, b) => a['Unit Price'] - b['Unit Price']
    }
]);

function getColumns(headers) {
    return headers.map(({
        name,
        ...rest
    }) => {
        return {
            title: name,
            dataIndex: name,
            key: name,
            ...rest
        }
    });
}

export default function DataTable({data,columns = salesColumns}) {
    return <Table
        sticky
        pagination={{
        position: ['topLeft'],
        hideOnSinglePage: true
    }}
        dataSource={data}
        columns={columns}/>;
}
