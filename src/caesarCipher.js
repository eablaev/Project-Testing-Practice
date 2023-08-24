function caesarCipher(string, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for(let i = 0; i < string.length; i++) {
        let char  = string[i].toLowerCase();
        let index = alphabet.indexOf(char);
       if (index === -1) {
        result += char;
        continue
       }

       let toUpperCase = (string[i] === string[i].toUpperCase()) ? true : false;
       if(index >= 25) index = index - 26
       let newChar = alphabet[index+shift];
       if(!toUpperCase) {
        result +=  newChar;
       } else {
        result += newChar.toUpperCase()
       }
        
    }
   
    return result
    
}

module.exports = caesarCipher;