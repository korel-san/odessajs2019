let ascii_text_generator = require('ascii-text-generator');
let input_text = 'Odessajs 2019';
let text ="/*\n" + ascii_text_generator(input_text,"2") + "\n*/";

console.log(text);