const fs = require('fs');
const csv = require('fast-csv');
const stream = fs.createReadStream('./src/Funcional/sales.csv','utf-8');

const headers = new Set();

let 

const streamCsv =  csv.parse({
                        headers:true,
                        // delimiter:'\n',
                        // quote:'"'
                    })
                    .transform(data => {
                        headers.add(data.YEAR_ID);
                    })
                    .on('error', error => console.error(error))
                    .on('data',data => {
                        // console.log(data);
                        // saveCsv(row,"sales_2003");
                    })
                    .on('end',rowCount=>console.log('Finished',rowCount));

stream.pipe(streamCsv);

const saveCsv = (data,name_file)=>{
    console.log(data);
    let ws = fs.createWriteStream(`./src/Funcional/${name_file}.csv`,'utf-8');
    csv.write(data,{headers:true,})
    .on('error', error => console.error(error))
    .on('end',()=> console.log("Arquivo salvo!!!"))
    .pipe(ws);
}


// Pegar o ano de cada dado e separar os dados do mesmo ano por grupo.