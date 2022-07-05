'use strict';
let input = process.argv.slice(2);
if (input.length !== 0){
    for (let j=0; j < input.length; j++) {
      if(typeof Number('input[j]') === "number"){
        if(input[j] > 0){
          let time = input[j]
          setTimeout( () => {
            process.stdout.write('\x07');
          },time);
        }
      }
    }
}
