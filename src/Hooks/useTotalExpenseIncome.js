import { useEffect, useState } from "react";
import { getStoredCart } from "../Components/LocalStroage";


const useTotalExpenseIncome = (refreshUl) => {
    const [storedItems, setStoredItems] = useState([]);

    useEffect(() => {
        setStoredItems(getStoredCart());
    }, [refreshUl]);


    // total income 
    let totalIncome = 0;
    totalIncome = storedItems?.filter(storedItem => storedItem.type === 'Income')?.reduce((pre, curr) => (pre + parseInt(curr?.amount)), 0)

    // total expense 
    let totalExpense = 0;
    totalExpense = storedItems?.filter(storedItem => storedItem.type === 'Expense')?.reduce((pre, curr) => (pre + parseInt(curr?.amount)), 0)


    return [totalIncome,totalExpense]
}

export default useTotalExpenseIncome;