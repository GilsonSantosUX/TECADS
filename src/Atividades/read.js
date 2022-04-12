// const csv = require('fast-csv');
const fs  = require('fs');

const fr = fs.readFile('./src/Funcional/sales.csv',(err, data) => {
    if (err) throw err;
    const buffer = data.toString('utf-8').split('\n');
    
    const headers = buffer[0].split(',');
    const sort_year = headers.indexOf('YEAR_ID');
    let values = [];

    for(let i=1;i<buffer.length-1;i++){
        buffer[i] === undefined || buffer[i] === '' ? false : values.push(buffer[i].split(','));
    }
    

    let years = new Set();

    values.forEach(row => row[sort_year] === undefined ? false : years.add(row[sort_year]));

    let newValues = new Set();

    for (let i = 0; i <= years.size; i++) {
        for(let z=0;z<=values.length-1;z++){
            if( years.has(values[z][sort_year])){
                newValues.add(values[z]);
            }
        }
        
    }

    console.log(newValues);

    // console.log(headers);
    // console.log(years);
    // console.log(values);
});

module.exports = fr;

// const csvStream = csv.format({ headers: true });

// csvStream.pipe(process.stdout).on('end', () => process.exit());

// csvStream.write({ header1: 'row1-col1', header2: 'row1-col2' });
// csvStream.write({ header1: 'row2-col1', header2: 'row2-col2' });
// csvStream.write({ header1: 'row3-col1', header2: 'row3-col2' });
// csvStream.write({ header1: 'row4-col1', header2: 'row4-col2' });
// csvStream.end();