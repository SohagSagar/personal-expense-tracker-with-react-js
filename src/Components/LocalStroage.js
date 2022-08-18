// use local storage to manage cart data
const addToLocalStroage = (data) => {
    let expenseTracker = {};

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('expense-tracker');
    if (storedData) {
        expenseTracker = JSON.parse(storedData);
    }

    // add quantity
    
    localStorage.setItem('expense-tracker', JSON.stringify(expenseTracker));
}

const getStoredCart = () =>{
    let expenseTracker = {};

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('expense-tracker');
    if(storedData){
        expenseTracker = JSON.parse(storedData);
    }
    return expenseTracker;
}

const removeFromLocalStroage = id => {
    const storedCart = localStorage.getItem('expense-tracker');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('expense-tracker', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = (setRefreshCart,refreshCart) => {
    localStorage.removeItem('shopping-cart');
    setRefreshCart(!refreshCart)
}

export {
    addToLocalStroage,
    removeFromLocalStroage,
    getStoredCart,
    deleteShoppingCart
}