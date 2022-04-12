
// Sabemos que atualmente diversas linguagens suportam este paradigma, em sua totalidade ou parcialmente.
// Nesta questão você deverá colocar em prática seus conhecimentos para desenvolver uma função em JavaScript que substitua todas as vogais de uma string recebida por parâmetros pelo caracter _ (underline). Esta função deverá colocar em prática os conceitos de pureza, imutabilidade, etc. 

const word = 'palavra';

function setUnderLine([...word],index=word.length){
    let i = index-1;
    let regex = /[AEIOU-aeiou]/;
    if(i < 0){
        return word.join('');
    }
    if(regex.test(word[i])){
        word[i] = '_';
    }
    return setUnderLine(word,i);
}
// console.log(setUnderLine(word));

// Discultir em aula com professor
function setUnderLinex([...word],index=word.length,regex=/[AEIOU-aeiou]/,shift='_'){
    if(index-1 < 0) return word.join('');
    else if(regex.test(word[index-1])) word[index-1] = shift;
    return setUnderLine(word,index-1,regex,shift);
}

function removerVogal([letra,...word]){
    // let regex = /[AEIOU-aeiou]/;
    // if(letra == undefined) return '';
    // else if(regex.test(letra)) return '_' + removerVogal(word);
    // return letra + removerVogal(word);
    return letra == undefined ? '' : (/[AEIOU-aeiou]/.test(letra) ? '_'+removerVogal(word) : letra+removerVogal(word));
}

const removerVogais = ([letra,...word]) => letra == undefined ? '' : (/[AEIOU-aeiou]/.test(letra) ? '_'+removerVogal(word) : letra+removerVogal(word));

console.log(removerVogais('gilson santos'));

// console.log(setUnderLinex(word));

setUnderLinex(word);

function fullname({name='Gilson',lastname='Santos'}={}){
    console.log(name + lastname);
}