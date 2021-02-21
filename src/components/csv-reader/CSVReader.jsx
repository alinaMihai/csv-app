import React from 'react';
import { CSVReader } from 'react-papaparse';
import './csv-reader.css';

function CSVReader2({loadData}) {
  const handleOnDrop = (data) => {
    loadData({data:data.map(field => field.data)});
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
    loadData({data:[], hasError:true});
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

 
    return (
      <div className="csvReader">
        <p>Upload File:</p>
        <CSVReader
          config={{header:true, skipEmptyLines: true }}
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </div>
    );
}
export default React.memo(CSVReader2);