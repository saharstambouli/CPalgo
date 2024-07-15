console.log("Hello Wold")

var str = prompt ("write a sentence ")




// Nombre de caractères / nbre de mpts 

nbwords = 0
length= 0 
voyels = 'aeiouAEIOU' 
nbvoyels = 0 
for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || str[i] === '.') {
        nbwords = nbwords + 1;
    }
    else {
         length = length + 1 

    }
}

console.log( 'nombre de caractères', length)
console.log('nombre de mots ',nbwords)

//The number of vowels in the sentence.

 
    for (let i = 0; i < str.length; i++) {
        if (voyels.includes(str[i])) {
    
            nbvoyels++;
        }
    }




console.log ('nombre de voyels  ' , nbvoyels)

















