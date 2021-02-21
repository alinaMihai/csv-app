import { Table, Popconfirm, Button } from 'antd';

function getColumns(headers) {
    return headers.map(({ name, ...rest }) => {
        return {
            title: name,
            dataIndex: name,
            key: name,
            ...rest,
        };
    });
}

export default function DataTable({ data, onDelete }) {
    const columns = getColumns([
        {
            name: 'Region',
            sorter: (a, b) => a['Region'].localeCompare(b['Region'], 'en'),
        },
        {
            name: 'Country',
            sorter: (a, b) => a['Country'].localeCompare(b['Country'], 'en'),
        },
        {
            name: 'Item Type',
            sorter: (a, b) =>
                a['Item Type'].localeCompare(b['Item Type'], 'en'),
        },
        {
            name: 'Order Date',
            sorter: (a, b) =>
                new Date(a['Order Date']).getTime() -
                new Date(b['Order Date']).getTime(),
        },
        {
            name: 'Order ID',
            responsive: ['md'],
        },
        {
            name: 'Ship Date',
            sorter: (a, b) =>
                new Date(a['Ship Date']).getTime() -
                new Date(b['Ship Date']).getTime(),
            responsive: ['md'],
        },
        {
            name: 'Units Sold',
            sorter: (a, b) => a['Units Sold'] - b['Units Sold'],
            responsive: ['md'],
        },
        {
            name: 'Unit Price',
            sorter: (a, b) => a['Unit Price'] - b['Unit Price'],
            responsive: ['md'],
        },
        {
            name: 'Unit Cost',
            sorter: (a, b) => a['Unit Price'] - b['Unit Price'],
            responsive: ['md'],
        },
        {
            name: 'Operation',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Popconfirm
                        title="Are you sure you want to delete this entry?"
                        onConfirm={() => onDelete(record.key)}
                    >
                        <Button type="primary">Delete</Button>
                    </Popconfirm>
                ) : null,
        },
    ]);
    return (
        <Table
            sticky
            pagination={{
                position: ['topLeft'],
                hideOnSinglePage: true,
            }}
            dataSource={data}
            columns={columns}
        />
    );
}
