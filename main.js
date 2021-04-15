//Odvoď si z větve main repozitáře ze cvičení větev develop a v ní přepiš všechny for cykly na while cykly.


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

let a = 0;
while (a <=10){
    console.log('while '+ a);
    a++;
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

let b = 0;
while (b < 10){
    console.log('while '+ b);
    b++;
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

let c = 10;
while(c >=0 ){
    console.log ('while ' + c);
    c--
}
