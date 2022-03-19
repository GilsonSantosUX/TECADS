// Menor: Esta função recebe um vetor e retorna o menor elemento neste mesmo vetor.
// Por exemplo, para o vetor [1, 9, 7, -2, 20] o retorno será -2

const array = [1, 9, 7, -2, 20];

function smaller(array,i){
    if(array[i] < array[i-1]) return array[i];
    return smaller(array,i-1);
}

console.log(smaller(array,array.length));
