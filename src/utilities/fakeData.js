const dataDb = id =>{
    let shoppingCart = {};

    //Get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    // Add quantity
    const quantity = shoppingCart[id];
    if(quantity){
       const newQuantity = parseInt(quantity) + 1;
       shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {dataDb};