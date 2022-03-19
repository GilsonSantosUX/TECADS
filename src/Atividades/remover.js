// Remove: Esta função recebe um vetor e um valor a ser removido nele (primeira ocorrência).
// Por exemplo, para os parâmetros [1,2, 1, 6, 8] e 1 o retorno será [2, 1, 6, 8].

const array = [1,2, 1, 6, 8];

function remove(array,i,value){
    if(array[i-1] === value){
        array.splice(array.indexOf(value), 1);
        return array;
    }
    return remove(array,i-1,value);
}

console.log(remove(array,array.length,1));