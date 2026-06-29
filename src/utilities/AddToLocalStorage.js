const getCartFromLocalStoreage = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString)
        return storedCart;
    }
    return []
}

const saveCartToLocalStorage = (cart) => {
    const cartStrigified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStrigified)
}

const addItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStoreage()
    const newCart =[...cart, id]

    saveCartToLocalStorage(newCart)
}

const removeFromLocalStorage = (id)=> {
    const storedCart = getCartFromLocalStoreage()
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart)
}

export {getCartFromLocalStoreage, addItemToLocalStorage, removeFromLocalStorage}