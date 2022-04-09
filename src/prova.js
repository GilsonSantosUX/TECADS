// Sabemos que atualmente diversas linguagens suportam este paradigma, em sua totalidade ou parcialmente.

// Nesta questão você deverá colocar em prática seus conhecimentos para desenvolver uma função em JavaScript que substitua todas as vogais de uma string recebida por parâmetros pelo caracter _ (underline). Esta função deverá colocar em prática os conceitos de pureza, imutabilidade, etc. 

const word = 'palavra';

function setUnderLine([...word],index = word.length){
    let i = index-1;
    if(i < 0){
        return word.join('');
    }else if(word[i].toLowerCase() === 'a' || word[i].toLowerCase() === 'e' || word[i].toLowerCase() === 'i' ||word[i].toLowerCase() === 'o' ||word[i].toLowerCase() === 'u'){
        word[i] = '_';
    }
    return setUnderLine(word,i);
}

console.log(setUnderLine(word))