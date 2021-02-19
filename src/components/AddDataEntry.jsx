import {useState} from 'react';
import {Button} from 'antd';
import AddDataEntryModal from './AddDataEntryModal';

export default function AddDataEntry({addSale}) {
    const [isModalVisble,
        setIsModalVisible] = useState(false);
    const toggleAddEntryModal = (value) => {
        setIsModalVisible(value || !isModalVisble);
    }
    const addNewSale = (item) => {
        addSale(item);
        toggleAddEntryModal(false);
    }
    return (
    <>
        <Button onClick={toggleAddEntryModal}>Add new record</Button>
        <AddDataEntryModal
        handleCancel={() => toggleAddEntryModal(false)}
        handleOk={addNewSale}
        isModalVisible={isModalVisble}/>
    </>
    )
}