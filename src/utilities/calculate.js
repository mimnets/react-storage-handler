const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

const numbers = [34,56, 67, 23, 65, 78];
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer,0);

// export default add; - Single default export

//Multiple exports declaration
export {add, multiply};