const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

// const numbers = [34,56, 67, 23, 65, 78];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer,0);
// const items = [
//     {id: 1, name: "Alta", price: 100},
//     {id: 2, name: "kOLTA", price: 200},
//     {id: 3, name: "bOLTA", price: 300},
//     {id: 4, name: "Solta", price: 400}
// ]

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default add; - Single default export

//Multiple exports declaration
// export {add, multiply, getTotalPrice}; OR

export {add, multiply, getTotalPrice as getTotal};