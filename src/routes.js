const Router  = require('express/lib/router/');
const fs = require('fs');
const readLine = require('readline');
const { Readable } = require('stream');
// const data = require('./Funcional/read');

const router = Router();

router.get("/",(request,response)=>{
    fr = fs.readFile('./src/Funcional/sales.csv',(err, data) => {
        if (err) throw err;
        // console.log(data.toString('utf-8'));
        const buffer = data.toString('utf-8').split('\n');
        const headers = buffer[0];
        let values = [];

        for(let i=1;i<buffer.length;i++){
            values.push(buffer[i].split(','));
        }

        console.log(values[0][9]>=values[4][9]);
    });

    return response.send();
});

module.exports =  router;
