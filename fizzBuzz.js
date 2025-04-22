function fizzBuzz()
{
    for (let i = 1; i < 256; i++) {
        let output = createWord(i);
        console.log(output);
    }
}

function createWord(i) {
    let array = [];

    if (i % 3 === 0) array.push('Fizz');
    
    if (i % 5 === 0) array.push('Buzz');

    if (i % 7 == 0) array.push('Bang');

    if (i % 11 == 0) array = ['Bong'];

    if (i % 13 == 0) {
        array = array.length > 0 ? insertFezz(array) : ['Fezz'];
    }

    if (i % 17 == 0) array.reverse();

    return array.length != 0 ? array.join('') : i;
}

function insertFezz(array) {

    for (let j = 0; j < array.length; j++) {

        if (array[j][0] === 'B') {
            return [...array.slice(0, j), 'Fezz', ...array.slice(j)];
        }
        
        if (j === array.length - 1) {
            return [...array, 'Fezz'];
        }
    }
}

fizzBuzz();
