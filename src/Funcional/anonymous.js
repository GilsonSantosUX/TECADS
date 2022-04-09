// Function anonymous
const sum = function(a,b){
    return a+b;
}
console.log(sum(4,2));

// Function anonymous auto executavel
(function(teste){
    return teste;
})();

// Arrow Function return esta de forma implicita sem o par de chaves
const Sum = (a,b) => a+b;
console.log(Sum(4,8));

// Spread/rest function decoration
function sumAll(...nums){
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}
console.log(sumAll(1,2,4,6,8,23,4));

//Function with callback
function fullname(name,lastname,callback){
    let fullname = name + lastname;
    callback(fullname); // <- aqui aplico uma função que será executada quando o corpo da função principal termina
}

fullname('Gilson','Santos',(data)=> console.log(data));

// Create promise

const myPromise = new Promise((resolve,reject)=>{
    const name = "Gilson"

    if(name == 'Gilson'){
        resolve('Tudo certo dentro da promessa!');
    }else{
        reject('Não esta tudo bem, esse é o retorno de que algo aconteceu errado!');
    }
})

myPromise.then((data)=>{
    console.log(data); // o data vai ser o return do resolve ou o reject dependendo do resultado da promessa!
});

myPromise.then((data)=>{
    console.log('passei no primeiro then');
    let dt = data.toLowerCase();
    return dt; // ao dar o return eu posso tratar os dados no proximo then
}).then((data)=>{
    console.log(data);
}).catch(err => {
    console.log('Tratamento do reject erro, mensagem dentro da promese: '+err);
}).finally(()=>console.log('Fim da minha promesa!'));

// posso passar varias promises e tratar de uma unica vez usando esse metodo Promise.all([...promises])
const resolveAll = Promise.all([myPromise]).then((data)=>{console.log(data)})

// A primeira que for resolvida irá ser retornada Promise.race([...promises])
const resolveRace = Promise.race([myPromise]).then((data)=>{console.log(data)})

// Fetch request na API do Github
// Fetch API
const userName = 'GilsonSantosUX';

// node não executa o fetch ainda ultilizase o axios para esse tipo de requisição API REST
// copiar e cola no browser para ver o resultado!
// fetch(`https://api.github.com/users/${userName}`,{
//     headers:{
//         Accept: 'application/vnd.github.v3+json'
//     }
// }).then((response)=>{ // resolve sem tratamento
//     // console.log(typeof response); // Verifica se o response é realmente um objeto
//     return response.json(); // retorno o data tratado para o proximo then
// }).then((data)=>{
//     console.log(data);
//     // return data;
// }).catch(err=>console.log('Algo inesperado aconteceu: '+err)); // Tratamento de erro da resquisição


// Interator Geradores colheita  return = yield
function myFunction(message, arg1, arg2, arg3, arg4, arg5) {
  console.log(`message [${message}] - received [${arg1} ${arg2} ${arg3} ${arg4}, ${arg5}]`)
}


const data = {
    message: 'using Symbol.iterator',
    firstArg:'a',
    secondArg:'b',
    *[Symbol.iterator](){
        for(const field of Object.values(data))
        yield field
    }
}

console.log(myFunction(...data));

