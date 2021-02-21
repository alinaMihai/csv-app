import { useState } from 'react';
import Modal from 'antd/es/modal';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import InputNumber from 'antd/es/input-number';
import DatePicker from 'antd/es/date-picker';
import Button from 'antd/es/button';

const initialItem = {
    region: '',
    country: '',
    itemType: '',
    orderDate: undefined,
    shipDate: undefined,
    unitsSold: '',
    unitPrice: '',
    unitCost: '',
};

export default function AddDataEntryModal({
    isModalVisible,
    handleOk,
    handleCancel,
}) {
    const [form] = Form.useForm();
    const [item, setItem] = useState(initialItem);

    const onChange = (name, value) => {
        setItem({
            ...item,
            [name]: value,
        });
    };

    const onCancel = () => {
        form.resetFields();
        handleCancel();
        setItem(initialItem);
    };

    const onSubmit = () => {
        const newItem = {
            ...item,
        };
        newItem.orderDate = item.orderDate?.toDate();
        newItem.shipDate = item.shipDate?.toDate();
        handleOk(newItem);
        form.resetFields();
        setItem(initialItem);
    };

    return (
        <Modal
            title="Add Sale"
            visible={isModalVisible}
            onCancel={onCancel}
            onOk={handleCancel}
            footer={[]}
        >
            <Form layout="vertical" form={form} onFinish={onSubmit}>
                <Form.Item
                    name="region"
                    label={'Region'}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        value={item.region}
                        onChange={({ target: { value } }) =>
                            onChange('region', value)
                        }
                    />
                </Form.Item>
                <Form.Item
                    name="country"
                    label={'Country'}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        value={item.country}
                        onChange={({ target: { value } }) =>
                            onChange('country', value)
                        }
                    />
                </Form.Item>
                <Form.Item label={'Item Type'}>
                    <Input
                        value={item.itemType}
                        onChange={({ target: { value } }) =>
                            onChange('itemType', value)
                        }
                    />
                </Form.Item>
                <Form.Item
                    name="orderDate"
                    label={'Order Date'}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker
                        value={item.orderDate}
                        onChange={(value) => onChange('orderDate', value)}
                    />
                </Form.Item>
                <Form.Item label={'Ship Date'}>
                    <DatePicker
                        value={item.shipDate}
                        onChange={(value) => onChange('shipDate', value)}
                    />
                </Form.Item>
                <Form.Item label={'Units Sold'}>
                    <InputNumber
                        value={item.unitsSold}
                        min={0}
                        onChange={(value) => onChange('unitsSold', value)}
                    />
                </Form.Item>
                <Form.Item label={'Unit Price'}>
                    <InputNumber
                        value={item.unitPrice}
                        min={0}
                        onChange={(value) => onChange('unitPrice', value)}
                    />
                </Form.Item>
                <Form.Item label={'Unit Cost'}>
                    <InputNumber
                        value={item.unitCost}
                        min={0}
                        onChange={(value) => onChange('unitCost', value)}
                    />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Modal>
    );
}
