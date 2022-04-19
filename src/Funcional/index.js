const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

/**
 *  Função que faz a leitura de um arquivo e retorna seu conteudo em um array.
 *  
 *  @return Array
 */
async function readCSV(file_name) {
  return new Promise((resolve, reject) => {
    const linhas = [];
    
    fs.createReadStream(path.resolve(__dirname, file_name))
      .pipe(csv.parse({ headers: true }))
      .on('error', error => reject(error))
      .on('data', row => linhas.push(row))
      .on('end', rowCount => resolve(linhas));  
  });
}

async function writeCSV(linhas, ano) {
  return new Promise((resolve, reject) => {
    const dados = linhas.filter(linha => linha.YEAR_ID == ano);  
    const caminho = path.resolve(__dirname, `sales_${ano}.csv`);
    csv.writeToPath(caminho, dados, { headers: true })
      .on('error', err => reject(err))
      .on('finish', () => resolve());
  });
}

readCSV('sales.csv')
  .then(async (linhas) => {
    const anos = new Set(linhas.map(linha => linha.YEAR_ID));
    // await Promise.all(Array.from(anos).map((ano) => writeCSV(linhas, ano)));
    await Promise.all([...anos].map((ano) => writeCSV(linhas, ano)));
    // for await (let ano of anos) writeCSV(linhas, ano);
  })
  .catch(console.error);

  