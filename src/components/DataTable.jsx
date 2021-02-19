import {Table} from 'antd';

const columns = getColumns([
    {
        name: 'Region',
        width: 100
    }, {
        name: 'Country'
    }, {
        name: 'Item Type'
    }, {
        name: 'Order Date'
    }, {
        name: 'Order ID'
    }, {
        name: 'Ship Date'
    }, {
        name: 'Units Sold'
    }, {
        name: 'Unit Price'
    }, {
        name: 'Unit Cost'
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

export default function DataTable({sales}) {
    return <Table
        sticky
        pagination={{
        position: ['topLeft'],
        hideOnSinglePage: true
    }}
        dataSource={sales}
        columns={columns}/>;
}
