const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');


const app = express()


app.get('/1', async (req, res) => {
    try {
        const response = await axios.get('http://app1-service/');
        const data = response.data
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send(error);
    }
})

app.get('/2', async (req, res) => {
    try {
        const response = await axios.get('http://app1-service-clusterip/')
        const data = response.data
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send(error);
    }
})


app.get('/3', async (req, res) => {
    try {
        const response = await fetch('http://app1-service-clusterip/')
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send(error);
    }
})



app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
