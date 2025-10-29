let even = [];
let odd = [];

for(let i = 1; i < 1501; i++){
    i % 2 === 0 ? even.push(i) : odd.push(i);
}

console.log("Numeros pares: " + even);
console.log("Numeros impares: " + odd);
