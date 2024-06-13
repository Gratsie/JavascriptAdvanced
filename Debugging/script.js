const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a,b) => a.concat(b), []);

//debugging
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
    console.log('array', array);
    console.log ('accumulator', accumulator);
    return accumulator.concat(array)

}, []);

//debugger
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
    debugger;
    return [].concat([0,1])

}, []);
    