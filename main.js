// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

for (let i = 0; i <= 10; i++){
    console.log('Promenn i = ' +i);
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
console.log('Druhý příklad - rozdíl mezi <= a <');

for (let i = 0; i < 10; i++){
    console.log('Promenna i = ' + i);
}
    
// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

for (let i = 10; i >=0; i--){
    console.log('for '+ i);
}


// cvicenie s while
let a = 10;
while (a >= 0){
    console.log('while '+ a);
    a--;
}


let podminka = true; 
let nahoda;
while (podminka) {
    nahoda = Math.floor(Math.random() * 10);
    if (nahoda > 5){
        podminka = false;
    }
    console.log(nahoda);
}