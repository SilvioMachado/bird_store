import express from 'express';
import { Client } from 'jexia-sdk-js';
import { jexiaClient, dataOperations } from 'jexia-sdk-js/node';

const PORT = 5001;
const app = express();

const credentials = {
  projectID: 'f47d4414-9af0-4be4-96f8-08f8b1eebf4d',
  key: 'b7f129b7-40d7-42ef-be34-d830436f025c',
  secret: 'sTz9g6c8lkOMmITK3PkaLbQB0kQFlSMdYUw8DWRPo5SjiEu8r5ce/flWFr+p4I57CFHjQ0hlTdz/xewmZd30Sw=='
};

const dataModels = dataOperations()
  .dataset("")
  .select()
  .execute()
  .then(data => console.log(data))
  .catch(error => console.log(error));

app.get('/api/v1/create_bird', (req, res) => {

  const promise = jexiaClient()
    .init(credentials, dataModels);
  
  promise.then( client => {
    res.status(200).send({
      success: 'true',
      message: 'Shit\'s done'
    });
  }).catch( error => {
    console.log('error')
    res.status(200).send({
      success: 'true',
      message: 'Shit\'s done'
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
