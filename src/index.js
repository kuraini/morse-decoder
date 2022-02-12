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
};

function decode(expr) {
    const arr = expr.split('');
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];

    for (let i = 0 ; arr.length > 0; i++) {
      arr2[i] = arr.splice(0, 10);
    }

    for (let item of arr2) {
      let copy = item.slice(0);
      let arr = [];
    
      for (let j = 0; copy.length > 0; j++) {
        arr[j] = copy.splice(0, 2).join('');
      }
      
      arr3.push(arr);
    }

    for (let item of arr3) {
      let str = '';
      for (let i of item) {
        if (i === '10') {
          str += '.';
        } else if (i === '11') {
          str += '-';
        } else if (i === '**') {
          str += ' ';
        }
      }
      
      arr4.push(str);
    }

    for (let item of arr4) {
      let arr = [];
      if (item.includes(' ')) {
        let str = item.replace(/\s+/g,'').trim();
        let symb = str.length > 0 ? MORSE_TABLE[str] : ' ';
        if (symb !== ' ') {
          arr.push(' ' + symb);
        } else {
          arr.push(symb);
        }
      } else if (MORSE_TABLE[item]) {
        arr.push(MORSE_TABLE[item]);
      }

      arr5.push(arr);
    }

    return arr5.join('');
}

module.exports = {
    decode
}