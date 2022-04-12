const fs = require('fs');
const csv = require('fast-csv');
const stream = fs.createReadStream('./src/Funcional/sales.csv','utf-8');

const streamCsv =  csv.parse({
                        headers:true,
                        // skipLines: 2,
                        // delimiter:'\n',
                        // quote:"'"
                    })
                    .on('error', error => console.error(error))
                    .on('data',data => {
                        if(data.YEAR_ID != undefined){
                            csv.write([data],{headers:true,skipRows: 2 })
                            .on('error', error => console.error(error))
                            .pipe(fs.createWriteStream(`./src/Funcional/${data.YEAR_ID}.csv`,'utf-8'));
                        }
                    });

stream.pipe(streamCsv);