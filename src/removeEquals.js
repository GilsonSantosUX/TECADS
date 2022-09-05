const array = [1, 1, 1, 2, 3, 3, 3];
const novaArr = array.filter((x, i) => array.indexOf(x) === i);
console.log(novaArr);