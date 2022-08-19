// use local storage to manage cart data
const addToLocalStroage = (incomeExpenseData) => {
    const items = JSON.parse(localStorage.getItem('items'));
    if(items===null){
        let storeData = [];
        storeData.push(incomeExpenseData);
        localStorage.setItem('items', JSON.stringify(storeData));
        return true;
    }else{
        let storeData = [...items];
        storeData.push(incomeExpenseData)
        localStorage.setItem('items', JSON.stringify(storeData));
        return true;
    }
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

const removeFromLocalStroage = (id,refreshUl,setRefreshUl) => {
    const storedData = localStorage.getItem('items');
    console.log(id);
    if (storedData) {
        const storedDataInLocalStroage = JSON.parse(storedData);
        console.log(storedDataInLocalStroage);
        const updatedData=[]
        for(const item of storedDataInLocalStroage){
            if(item.id!==id){
                updatedData.push(item)
            }
        }
        localStorage.setItem('items', JSON.stringify(updatedData));
        setRefreshUl(!refreshUl);
        return true;
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