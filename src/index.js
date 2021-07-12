const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********": " "
};

function decode(expr) {
    // write your solution here
   // let str1=expr.match(/.{10}/g);
  //  for(let i=0; i<str1.length; i++){
      //  str1[i].replace(/11/gi, "-");
      //  str1[i].replace(/10/gi, ".");
      //  str1[i].replace(/00/gi, "*");
  //  }
  //  return str1;

  let decodedWord = "";

  //words.map(item => {
  for (let i = 0; i < expr.length; i += 10) {
    decodedWord +=
      MORSE_TABLE[
        expr
          .substr(i, 10)
          .replace(/11/g, "-")
          .replace(/10/g, ".")
         .replace(/00/g, "")
      ];
  }

  return decodedWord;
}

module.exports = {
    decode
}