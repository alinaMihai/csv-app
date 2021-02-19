import React, { useContext } from 'react';
import { CSVReader } from 'react-papaparse';
import {SalesContext} from '../services/sales.service';

export default function CSVReader2() {
  const {loadSales} = useContext(SalesContext);
  const handleOnDrop = (data) => {
    loadSales({data:data.map(field => field.data)});
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
    loadSales({data:[], hasError:true});
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

 
    return (
      <>
        <h5>Click and Drag Upload</h5>
        <CSVReader
          config={{header:true, skipEmptyLines: true }}
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </>
    );
}