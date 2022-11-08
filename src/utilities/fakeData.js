const dataDb = id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
       console.log('already exists');
       const newQuantity = parseInt(quantity) + 1;
       localStorage.setItem(id, newQuantity);
    }
    else{
        localStorage.setItem(id, 1);
    }
    
}

export {dataDb};