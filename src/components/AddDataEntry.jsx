import React, { useState } from 'react';
import { Button } from 'antd';
import AddDataEntryModal from './AddDataEntryModal';

function AddDataEntry({ addSale }) {
    const [isModalVisble, setIsModalVisible] = useState(false);
    const toggleAddEntryModal = (value) => {
        setIsModalVisible(value || !isModalVisble);
    };
    const addNewSale = (item) => {
        addSale(item);
        toggleAddEntryModal(false);
    };
    return (
        <>
            <Button type="primary" onClick={toggleAddEntryModal}>
                +Add new record
            </Button>
            <AddDataEntryModal
                handleCancel={() => toggleAddEntryModal(false)}
                handleOk={addNewSale}
                isModalVisible={isModalVisble}
            />
        </>
    );
}

export default React.memo(AddDataEntry);