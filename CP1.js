console.log("Hello Wold")

var str = prompt ("write a sentence ")


/* // Determine the lenhth of the sentence 
function length(str) {

       return str.length;

} */


// Option 2 

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

//The number of words in the sentence (assuming that the words are separated by a single space).



/* /* function numberword(str) {
    //step 1 : we slit the sentence into words 
    var words = str.split(' ');

    //step 2 : we determine the number of words 
    return (words.length - 1)

 
}
 */



//The number of vowels in the sentence.















