const doComicNumber = (function () {
    let index = 1;
    const min = 1;
    const max = 2475;
    
    return function (action, number) {
        switch (action) {
            case 'next':
                index += number;
                // check if > 2475
                index = index > max ? index - max : index;
                break;

            case 'prev':
                index -= number;
                // check if < 1
                index = index < min ? index + max : index;
                break;

            case 'rand':
                index = Math.floor(Math.random() * (max - min) + min);
                break;

            case 'set':
                // check if positive integer > 2475
                if (number > max) {
                    index = number % max === 0 ? max : number % max;
                } else {
                    index = number;
                }
                break;
        }
        return index;
    }
})();

// TEST CASES 
// console.log(doComicNumber());
// console.log(doComicNumber());
// console.log(doComicNumber('next', 1));
// console.log(doComicNumber());
// console.log(doComicNumber('prev', 1));
// new_index = doComicNumber('set', 55);
// console.log(new_index);
// console.log(doComicNumber('rand'));
// console.log(doComicNumber('rand'));