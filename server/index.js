const express = require('express');
const cors = require('cors');

const app = express();

const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.use(express.json());
app.use(cors());


app.get('/api/houses', getAllHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);



app.listen(5000, () => {
    console.log('Port is running on 5000')
})